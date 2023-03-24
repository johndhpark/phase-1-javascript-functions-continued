// code your solution here

function saturdayFun(activity) {
	activity = activity == undefined ? "roller-skate" : activity;

	return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity) {
	activity = activity == undefined ? "go to the office" : activity;

	return `This Monday, I will ${activity}.`;
}

function wrapAdjective(wrapper) {
	if (wrapper === "*") {
		return (str) => `You are *${str}*!`;
	} else if (wrapper === "||") {
		return (str) => `You are ||${str}||!`;
	} else {
		return (str) => `You are ${str}!`;
	}
}
