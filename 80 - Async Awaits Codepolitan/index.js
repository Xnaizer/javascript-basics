// call stack adalah mekanisme untuk interpreter melacak lokasi skrip yang memanggil banyak fungsi - fungsi apa yang dipanggil dari dalam fungsi itu

// callback version
const requestCallback = (url, success, failure) => {
	const delay = Math.floor(Math.random() * 4500) + 500;
	setTimeout(() => {
		if (delay > 4000) {
			failure('Error: Connection Timeout');
		} else {
			success(`Success: ${url} (${delay}ms)`);
		}
	}, delay);
};

// CALLBACK
requestCallback('movie.com', function(){
    console.log('it worked');
}, function() {
    console.log('eror bang')
})



// Promise version
const requestPromise = (url) => {
	return new Promise((resolve, reject) => {
		const delay = Math.floor(Math.random() * 4500) + 500;
		setTimeout(() => {
			if (delay > 2000) {
				reject('Error: Connection Timeout');
			} else {
				resolve(`Success: ${url} (${delay}ms)`);
			}
		}, delay);
	});
};

async function requestHandler() {
	try {
		let result = await requestPromise('movie.com');
		console.log(result);
	} catch (error) {
		console.log('Pesan Error', error);
	}
}

requestPromise('movie.com')
	.then((result) => {
		console.log('page 1');
		console.log(result);
		return requestPromise('movie.com');
	})
	.then(() => {
		console.log('page 2');
		return requestPromise('movie.com');
	})
	.then(() => {
		console.log('page 3');
		return requestPromise('movie.com');
	})
	.catch((err) => {
		console.log(err);
	});

// requestPromise('movie.com')
// 	.then((response) => {
// 		console.log('success', response);
// 		requestPromise('movie.com')
// 			.then((response) => {
// 				console.log('success', response);
// 				requestPromise('movie.com')
// 					.then((response) => {
// 						console.log('success', response);
// 						requestPromise('movie.com')
// 							.then((response) => {
// 								console.log('success', response);
// 								requestPromise('movie.com')
// 									.then((response) => {
// 										console.log('success', response);
// 									})
// 									.catch((error) => {
// 										console.log('error', error);
// 									});
// 							})
// 							.catch((error) => {
// 								console.log('error', error);
// 							});
// 					})
// 					.catch((error) => {
// 						console.log('error', error);
// 					});
// 			})
// 			.catch((error) => {
// 				console.log('error', error);
// 			});
// 	})
// 	.catch((error) => {
// 		console.log('error', error);
// 	});

// requestCallback(
// 	'movie.com',
// 	function (response) {
// 		console.log('success', response);
// 		requestCallback(
// 			'movie.com',
// 			function (response) {
// 				console.log('success', response);
// 				requestCallback(
// 					'movie.com',
// 					function (response) {
// 						console.log('success', response);
// 						requestCallback(
// 							'movie.com',
// 							function (response) {
// 								console.log('success', response);
// 								requestCallback(
// 									'movie.com',
// 									function (response) {
// 										console.log('success', response);
// 									},
// 									function (error) {
// 										console.log('error', error);
// 									}
// 								);
// 							},
// 							function (error) {
// 								console.log('error', error);
// 							}
// 						);
// 					},
// 					function (error) {
// 						console.log('error', error);
// 					}
// 				);
// 			},
// 			function (error) {
// 				console.log('error', error);
// 			}
// 		);
// 	},
// 	function (error) {
// 		console.log('error', error);
// 	}
// );

const contohPromise = () => {

    return new Promise((resolve, reject) => {
        resolve(() =>{
            return `berhasil yahh`
        });
        reject(() =>{
            return `gagall`
        });

    });

}

const delayedColorChange = (color, delay) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
           document.body.style.backgroundColor = color; 
           resolve();
        }, delay);
    })
}

delayedColorChange('red', 1000)
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('purple', 1000));

const hello = async () => {
    // throw 'Maaf gak kenal';
    return 'Hello World';
};
    
hello()
    .then((res) => {
        console.log('response', res);
    })
    .catch((err) => {
        console.log('error', err);
    });



const delayedColorChange2 = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    });
};

// delayedColorChange2('red', 1000)
// 	.then(() => delayedColorChange2('yellow', 1000))
// 	.then(() => delayedColorChange2('green', 1000))
// 	.then(() => delayedColorChange2('blue', 1000))
// 	.then(() => delayedColorChange2('purple', 1000))
// 	.then(() => delayedColorChange2('orange', 1000))
// 	.then(() => delayedColorChange2('black', 1000));

async function changeColor() {
    await delayedColorChange2('red', 1000);
    await delayedColorChange2('yellow', 1000);
    await delayedColorChange2('green', 1000);
    await delayedColorChange2('blue', 1000);
    await delayedColorChange2('purple', 1000);
    await delayedColorChange2('orange', 1000);
    await delayedColorChange2('black', 1000);
    return 'All Done!';
}

async function printRainbow() {
    await changeColor();
    console.log('All Done! Dari printRainbow');
}

printRainbow();