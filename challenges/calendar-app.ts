export class CalendarApp {
  private eventsByName: Map<
    string,
    { startMinutes: number; endMinutes: number }
  >;
  private eventsSorted: {
    name: string;
    startMinutes: number;
    endMinutes: number;
  }[];

  constructor() {
    this.eventsByName = new Map();
    this.eventsSorted = [];
  }

  add(event_name: string, start_time: string, duration: number): void {
    // 開始時刻を「分」に変換
    const startMinutes = this.timeToMinutes(start_time);
    const endMinutes = startMinutes + duration;

    // イベントは00:00〜23:59内であるかをチェック後、範囲外の場合は追加しない
    if (startMinutes < 0 || startMinutes > 24 * 60 - 1 || endMinutes > 24 * 60)
      return;

    // 既存イベントとの時間の重複が発生するのであれば、追加しない
    if (
      this.eventsSorted.some(
        (ev) =>
          !(endMinutes <= ev.startMinutes || startMinutes >= ev.endMinutes)
      )
    )
      return;

    // 重複なし、イベントを追加
    this.eventsByName.set(event_name, { startMinutes, endMinutes });

    // 開始時刻順にソートされたリストに挿入（挿入位置は二分探索で特定）
    let left = 0,
      right = this.eventsSorted.length;
    while (left < right) {
      const mid = (left + right) >> 1;
      if (this.eventsSorted[mid].startMinutes < startMinutes) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    this.eventsSorted.splice(left, 0, {
      name: event_name,
      startMinutes,
      endMinutes,
    });
  }

  remove(event_name: string): void {
    const event = this.eventsByName.get(event_name);
    if (!event) return;

    // 名前で管理しているMapから削除
    this.eventsByName.delete(event_name);

    // ソートされた配列からも削除
    const { startMinutes } = event;

    // 二分探索で開始時刻の場所を検索
    let left = 0,
      right = this.eventsSorted.length - 1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (this.eventsSorted[mid].startMinutes === startMinutes) {
        // 同じ開始時刻のイベントの名前を確認して削除
        if (this.eventsSorted[mid].name === event_name) {
          this.eventsSorted.splice(mid, 1);
          break;
        } else {
          // 同じ開始時刻の隣接イベントがあればそれも確認（理論上重複不可だが安全のため）
          let i = mid - 1;
          while (i >= 0 && this.eventsSorted[i].startMinutes === startMinutes) {
            if (this.eventsSorted[i].name === event_name) {
              this.eventsSorted.splice(i, 1);
              return;
            }
            i--;
          }
          i = mid + 1;
          while (
            i < this.eventsSorted.length &&
            this.eventsSorted[i].startMinutes === startMinutes
          ) {
            if (this.eventsSorted[i].name === event_name) {
              this.eventsSorted.splice(i, 1);
              return;
            }
            i++;
          }
          break; // 発見できなかったら終了
        }
      } else if (this.eventsSorted[mid].startMinutes < startMinutes) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  get(time: string): string {
    // 指定時間を分に変換
    const minutes = this.timeToMinutes(time);

    // minutesが区間内にあるイベントを二分探索で探す
    let left = 0;
    let right = this.eventsSorted.length - 1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      const event = this.eventsSorted[mid];
      if (event.startMinutes <= minutes && minutes < event.endMinutes) {
        return event.name;
      } else if (minutes < event.startMinutes) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    // 見つからなければ空文字列を返す
    return "";
  }

  private timeToMinutes(time: string): number {
    // "HH:MM"形式の時刻を分へ変換
    const [hh, mm] = time.split(":").map(Number);
    return hh * 60 + mm;
  }
}
