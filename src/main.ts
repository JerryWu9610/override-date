// @ts-ignore
import dayjs from './dayjs/dayjs.min.js';

// 声明 dayjs 模块的类型
// declare module 'dayjs' {
//   interface Dayjs {
//     format(format?: string): string;
//     add(value: number, unit: string): Dayjs;
//     subtract(value: number, unit: string): Dayjs;
//     isAfter(date: Dayjs | string): boolean;
//     isBefore(date: Dayjs | string): boolean;
//     // 可以添加更多你需要的类型声明
//   }
//   function dayjs(date?: string | number | Date): Dayjs;
//   export default dayjs;
// }

// // @ts-ignore
// const utc = require('./dayjs/plugin/utc.js');
// // @ts-ignore
// const timezone = require('./dayjs/plugin/timezone.js');

console.log(dayjs);
// Register plugins
// dayjs.extend(utc);
// dayjs.extend(timezone);

// 这里是你的库代码
export function greet(name: string): string {
  const time = dayjs();
  return `Hello, ${name}, ${time.format('YYYY-MM-DD HH:mm:ss')}`;
}

// 导出你想要暴露的所有函数
export default {
  greet,
  dayjs
}; 