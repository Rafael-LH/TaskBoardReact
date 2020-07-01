exports.sendResponse = (res, status, message = '', result = {}) => {
  const issetError = message.toString().indexOf('TypeError') > -1;
  const resStatus = (status) ? status : (issetError) ? 500 : 200;
  const resMessage = (issetError)
    ? 'Ha ocurrido algun error, intenta más tarde'
    : message;
  const resResult = (result) ? result : (issetError) ? 'Ha ocurrido algun error, intenta más tarde' : {}

  if (issetError) console.log(`[response] ${message}`);

  res.status(resStatus).send({
    message: resMessage,
    result: resResult,
  })
}