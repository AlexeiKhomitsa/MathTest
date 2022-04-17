const btn = document.getElementById('finish');

btn.addEventListener('click', checkTest);

function checkTest() {
	let result = 0;

	const a1 = document.getElementById('q1').value;
	if (a1 === '4') {
		result++;
	}

	const a2 = document.getElementById('q2').value;
	if (a2 === '6') {
		result++;
	}

	const a3 = document.getElementById('q3').value;
	if (a3 === '10') {
		result++;
	}

	const a4 = document.getElementById('q4').value;
	if (a4 === '-1') {
		result++;
	}

	const a5 = document.getElementById('q5').value;
	if (a5 === '1') {
		result++;
	}

	alert('Правильных ответов: ' + result);
}