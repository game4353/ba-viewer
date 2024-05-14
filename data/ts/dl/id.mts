import axios from "axios";

export async function getId() {
  const url =
    "https://script.google.com/macros/s/AKfycbwrou4rF5g3H7zdmFA73C2kpPa3G_BRHnnCGFE7DbL8tzAbp5owYioeSuwdI32hR6GP8w/exec";
  const res = await axios.get(url);
  return res.data as string;
}
