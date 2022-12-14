module.exports = {
    port: 3000,
    dbUri: 'mongodb://localhost:27017/rest-api-tutorial',
    saltWorkFactor: 10,
    accessTokenTtl: '15m',
    refreshTokenTtl: '1y',
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEA21HnGDSG8zja9DRz825e7KV+xFdSR46uVMVYL2iQ4zu70hLS
E+ZKy9fnwC0uDhQWcilvxWRkuW57lMW9G6Pbq//aS+ih/cMHgG61cUmFNzXOxZjt
9KgwYRuXdM6W7kzUulQWcU/tR3k5e9Xs2yyJ3Tpzb2vsvP2rvcusZ523IrUVjlsR
EmBLEvCHBxNOk/C1FQKj0/rqQrrfLwJDbpG52b07Jzl78XlMupO39WOqwFuOUyQR
QT0X65O+45b7lTESwinEbapwx3mIMjBY6tRXmajYfkB4E663BsGvZn40oyyA+Hzj
kRne5MTnby3WOpTtcYucR4kcYIdyxzGUiz0GXQIDAQABAoIBAAvWKsO6qgHccqy1
XACqV0MsV2AfWlh0UeJPWEgOu6sX4TYgP+hFCIph16ceiRrHaMK2i8q6dVkwpkjM
Nz2TpVpuD4kDQCLi8Le0weQgVKk7JTKy4zzOCvZit9TdBXZM/TolKaTp7GNsHncZ
f5QAnlwrOGmuCHPWuPsgT+izsVuVErxUj0LNJrvj5Y0iUi66t8ADb9iFF4d5AJtm
tczPBqm+v2ckRQGfzhk0KCshPwZV5BEP8hIR5Z75th6vZCIOzxMtcKhjEbS5yKB9
kn8WqAiaGfZ06fhNMMwbWrx8LbZrYE8il3nZ/Hgy5UneBMN+xBxkUcv9Fpp/ZsR6
bBdGqsECgYEA+kVU1jWcc+hlk8JjFjeEY/ss1v/WjAeJq34wQm5WOdkdssXqwjN0
AzJMbvojMXFwQvWu/CrcqZrLymp8nFLUaROLZo9B5z78LZrpcNNbqRSkbGD7u5t0
KeGsJIlwhChhZy95OL7+UYp8QrGoP4mF5EvMhDXldjHmtuHpDG1jFQ0CgYEA4Fcw
YiMon7jKrt6AEOlZiUkVkzgZpxMg+8kwTCnvQIsyYFz9EqE6XDSE2gFyQi/NhJ6G
J2XZio1WUKdQva396SiJrbbD3wauU/wVsNHVPnXO5PHZza4Q7VA11ZGkXZBbAd0R
9C3+bt5GOENl/H1qQpqa9sC6sd1rcdyoGfrEApECgYEAvc7nUK7IQX/3yeCblbX1
Sn6su0K9TOZKmy3RHBDihG0OAQ/pw++SBPqYzXIYTt9h7Oa4F7fKMzebZ6DrcQPA
5RBVoSr1KJS0XUIn2dHyqoFlUm0bfmWf7EOjcvJpy1F0zfVLUqZH6z/EjjB/EfET
AtoZ+guGQ+YEvJ8JSMuNYeECgYAlhU+ZSkoUFKMJhjsjGPQZqviJy9s2f1OH6QlD
48uZHu7JASRuhjqtizchAxbqDPaxlJXZZwZwTt091g4B+2S5J0eHn0a5OXPUphe2
oBGrRabZ0b1c0h0Qo9atJpO39lnSQPgsv7iLMG/MHzGifhNUmmkKlgdjkiXTQFV5
KuC3kQKBgC+hj7VIK+OoNECcfZB+/BkgiMIUQT0fmqnlMfcGox4Nl0y+ttGiYrzj
Ymbb4E6rKprMq4rEBJ2qI8wo7l6Wwaazky0MXcuYeqXXkGyp+w6cLn1eRQ0c0jed
tTd9BxPTb22rHT4jwTPLjArgrbIV5NNpoWDcZ0ECSYm8WAovjqdv
-----END RSA PRIVATE KEY-----`,
    publicKey: `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA21HnGDSG8zja9DRz825e
7KV+xFdSR46uVMVYL2iQ4zu70hLSE+ZKy9fnwC0uDhQWcilvxWRkuW57lMW9G6Pb
q//aS+ih/cMHgG61cUmFNzXOxZjt9KgwYRuXdM6W7kzUulQWcU/tR3k5e9Xs2yyJ
3Tpzb2vsvP2rvcusZ523IrUVjlsREmBLEvCHBxNOk/C1FQKj0/rqQrrfLwJDbpG5
2b07Jzl78XlMupO39WOqwFuOUyQRQT0X65O+45b7lTESwinEbapwx3mIMjBY6tRX
majYfkB4E663BsGvZn40oyyA+HzjkRne5MTnby3WOpTtcYucR4kcYIdyxzGUiz0G
XQIDAQAB
-----END PUBLIC KEY-----`,
}