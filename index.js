function takeANumber (line, name) {
  line.push (name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}
function nowServing (katzDeliLine) {
  if (katzDeliLine.length) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}
function currentLine (line) {
  const names = [];
  for (let i = 0, l = line.length; i < l; i++) {
    names.push(`${i + 1}. ${line[i]}`);
  if (line.length) {
    return `The line is currently: ${names.join(' , ') }`;
  } else {
    line.length === 0;
  return "The line is currently empty.";
  }
  }
}