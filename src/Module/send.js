function Send(res,status,data) {
    res
    .status(status)
    .send({ data })
    .end()
}

export default Send;