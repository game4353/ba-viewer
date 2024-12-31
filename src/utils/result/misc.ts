import { z } from "zod";
import { Err, Ok } from "./result";

export function toInt(input: any) {
  const res = z.number().int().safeParse(input);
  if (res.success) return Ok(res.data);
  else return Err(res.error);
}
