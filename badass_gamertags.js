Array.prototype.random = function(last) {
    var num = 0;
    do {
       num = Math.floor(Math.random() * this.length);
    } while (this[num] == last);
    return this[num];
}

function generate_badass_gamertag() {
	var gamertag = '';
	var badass_prefix = _get_badass_prefix();
	var badass_thing = _get_badass_thing(badass_prefix);
	console.log(badass_prefix + badass_thing);

	badass_prefix = _add_badass_diacritics(badass_prefix);
	badass_prefix = _add_badass_leetspeak(badass_prefix);
	gamertag += badass_prefix;

	badass_thing = _add_badass_diacritics(badass_thing);
	badass_thing = _add_badass_leetspeak(badass_thing);
	gamertag += badass_thing;
	
	gamertag = _add_badass_filler(gamertag);
	gamertag = _add_badass_flair(gamertag);

	return gamertag
}

var last_badass_filler;
function _add_badass_filler(gamertag) {
	// 30% chance to add an article/word to short gamertags
	if (gamertag.length < 10 && Math.random() < 0.5){
		var badass_fillers = badass_prefixes.filter(function(prefix){
			return prefix.length <= 4
		});
		badass_fillers.push('The');
		var badass_filler = badass_fillers.random(last_badass_filler);
		last_badass_filler = badass_filler;
		gamertag = badass_filler + gamertag;
	}
	return gamertag
}

var last_badass_flair;
function _add_badass_flair(gamertag) {
	// 30% chance to add badass flair, different from the last one
	if (Math.random() < 0.3) {
		var badass_flair = badass_flairs.random(last_badass_flair);
		last_badass_flair = badass_flair;
		gamertag = badass_flair.start + gamertag + badass_flair.end;
	}
	return gamertag
}

var last_badass_prefix;
function _get_badass_prefix() {
	var badass_prefix = badass_prefixes.random(last_badass_prefix);
	last_badass_prefix = badass_prefix;
	return badass_prefix
}

var last_badass_thing;
function _get_badass_thing(exclude_badass_word) {
	var badass_thing;
	//Pick a badass thing that is unlike exclude_badass_word
	//or the last badass thing
	do {
		badass_thing = badass_things.random(last_badass_thing);
	} while (badass_thing == exclude_badass_word);

	last_badass_thing = badass_thing;
	return badass_thing
}

var badass_table = [ ['i','1'], ['e', '3'], ['o', '0'] ]
function _add_badass_leetspeak(badass_string) {
	//15% chance to make badass string more 1337
	if (Math.random() < 0.15) {
		for (var i = 0; i < badass_table.length; i++) {
			badass_string = badass_string.replace(badass_table[i][0], badass_table[i][1]);
		}
	}
	return badass_string
}

function _add_badass_diacritics(badass_string) {
	for (var i = 0; i < badass_diacritics.length; i++) {
		//chance to add some badass diacritics
		if (Math.random() < 0.12) {
			badass_string = badass_string.replace(badass_diacritics[i].base, badass_diacritics[i].letters.random());
		}
	}
	return badass_string
}