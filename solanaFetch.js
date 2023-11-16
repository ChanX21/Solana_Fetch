
async function getSolanaAccounts(_account){
var myHeaders = new Headers();
myHeaders.append("x-api-key", process.env.SHYFT_API_KEY);


var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(
  "https://api.shyft.to/sol/v1/transaction/history?network=mainnet-beta&tx_num=2&account="+_account+"&enable_raw=true",
  requestOptions
)
  .then(response => response.text())
  .then(result => {console.log(result)
})
  .catch(error => console.log('error', error));
}

getSolanaAccounts();