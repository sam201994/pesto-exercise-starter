function telephoneCheck(phoneNum) {
  const format1 = /^(\d{3})(-)(\d{3})(-)(\d{4})$/; // 555-555-5555
  const format2 = /^(\()(\d{3})(\))(\d{3})(-)(\d{4})$/; // (555)555-5555
  const format3 = /^(\()(\d{3})(\) )(\d{3})(-)(\d{4})$/; // (555) 555-5555
  const format4 = /^(\d{3})( )(\d{3})( )(\d{4})$/; // 555 555 5555
  const format5 = /^(\d{10})$/; // 5555555555
  const format6 = /^(1 )(\d{3})( )(\d{3})( )(\d{4})$/; // 1 555 555 5555
  const format7 = /^(1 \()(\d{3})(\) )(\d{3})(-)(\d{4})$/; // 1 (555) 555-5555
  return (format1.test(phoneNum) || format2.test(phoneNum) || format3.test(phoneNum)
  || format4.test(phoneNum) || format5.test(phoneNum) || format6.test(phoneNum)
  || format7.test(phoneNum));
}

export { telephoneCheck };
