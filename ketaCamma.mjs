export function f() {
  let result
  /**
   *  数字を3桁カンマ区切りとする
   * 
   */
  console.log("\n=== 数字を3桁カンマ区切りとする ===")

  //
  //--- toLocaleString() を利用する ---
  //
  let num = 12345
  result = num.toLocaleString(); console.log(`12345: ${result}`)

  // 数字の場合数値に直してからtoLocaleStringする
  const str = "7890123"    
  result = Number(str).toLocaleString(); console.log(`"12345": ${result}`)

  //
  //--- 正規表現を使う ---
  //   小数点付きでもOK
  //
  num = 12345.123
  const s = String(num).split('.')
  let ans = String(s[0]).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
  if(s.length > 1) ans += '.' + s[1]
  result = ans; console.log(`exreg: ${result}`)

  return result
}
