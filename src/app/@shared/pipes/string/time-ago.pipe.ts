import { Pipe, PipeTransform, ChangeDetectorRef } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable, interval } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import EN from './time-ago.en';
import FR from './time-ago.fr';

@Pipe({
  name: 'timeAgo',
  pure: false
})
export class TimeAgoPipe extends AsyncPipe implements PipeTransform {

  private static TIME_MAP = {
    en: EN,
    fr: FR,
  };

  private static SECONDS = 60;
  private static MINUTES = 60;
  private static HOURS   = 24;
  private static DAYS    = 30;
  private static MONTHS  = 12;

  value: Date;
  locale: string;
  timer: Observable<string>;

  constructor(ref: ChangeDetectorRef) {
    super(ref);
  }

  transform(value: any, locale?: any): any {
    this.value  = new Date(value);
    this.locale = locale;

    if (!this.timer) {
      this.timer = this.getObservable();
    }

    return super.transform(this.timer);
  }

  getObservable() {
    return interval(10000).pipe(
      startWith(0),
      map(() => {
        var result: string;

        // get current time
        let now = new Date().getTime();

        // time since value date was sent in seconds
        let delta = (now - this.value.getTime()) / 1000;

        let timeMap = TimeAgoPipe.TIME_MAP[this.locale];

        // format the result
        for (let time in timeMap) {
          if (!timeMap.hasOwnProperty(time)) {
            continue;
          }

          const current = timeMap[time];

          if (delta <= parseInt(time) || (current.hasOwnProperty("is_last") && delta >= parseInt(time))) {
            // set the result for the current text & replace {time} by the accurate delta
            result = current.text;
            result = result.replace("{time}", this.getReadableDelta(delta, current.unit).toString());

            // since result is found, break out of the loop.
            break;
          }
        }

        // return result
        return result;
      })
    );
  }

  getReadableDelta(delta: number, unit: string): number {
    let readableDelta = delta;

    switch (unit) {
      case "year":
        // transform delta in seconds and devide it by the number of months in a year
        readableDelta = (readableDelta / TimeAgoPipe.MONTHS);
        // no break;
      case "month":
        // transform delta in seconds and devide it by the number of days in a month (30 is the average)
        readableDelta = (readableDelta / TimeAgoPipe.DAYS);
        // no break;
      case "day":
        // transform delta in seconds and devide it by the number of hours in a day
        readableDelta = (readableDelta / TimeAgoPipe.HOURS);
        // no break;
      case "minute":
        // transform delta in seconds and divide it by the number of minutes in an hour and the number of seconds in a minute.
        readableDelta = (readableDelta / TimeAgoPipe.MINUTES);
        readableDelta = (readableDelta / TimeAgoPipe.SECONDS);
        break;
    }

    // round down the number so we remove any decimals. (nobody cares for "3.54 days ago")
    readableDelta = Math.floor(readableDelta);

    return readableDelta;
  }
}
