function takeANumber (line, name) {
  line.push (name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}
function nowServing (katzDeliLine) {
  if (!katzDeliLine.length) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}