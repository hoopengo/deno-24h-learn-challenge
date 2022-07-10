import {
  dayOfYear,
  parse,
} from "https://deno.land/std@0.147.0/datetime/mod.ts";

const date = "10-07-2022";

const year: number = parse(date, "dd-mm-yyyy").getFullYear();
console.log(year);

const day: number = dayOfYear(new Date());
console.log(day);
