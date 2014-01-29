Array.prototype.random = function(last) {
    var num = 0;
    do {
       num = Math.floor(Math.random() * this.length);
    } while (this[num] == last);
    return this[num];
}

function generate_badass_gamertag() {
	var gamertag;
	var badass_flair;
	var badass_prefix;

	badass_flair = _get_badass_flair();
	gamertag = badass_flair.start;
	
	badass_prefix = _get_badass_prefix();
	gamertag += badass_prefix;

	gamertag += _get_badass_thing(badass_prefix);
	gamertag += badass_flair.end;
	
	gamertag = _make_badass_leetspeak(gamertag);

	return gamertag
}

var last_badass_flair;
function _get_badass_flair() {
	var badass_flair;
	// 30% chance to return badass flair
	if (Math.random() < 0.3) {
		badass_flair = badass_flairs.random(last_badass_flair);
		last_badass_flair = badass_flair;
	} else {
		badass_flair = {start:'', end:''};
	}
	return badass_flair
}

var last_badass_prefix;
function _get_badass_prefix() {
	var badass_prefix;
	badass_prefix = badass_prefixes.random(last_badass_prefix);
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

var badass_table = [ ['i','1'], ['e', '3'] ]
function _make_badass_leetspeak(badass_string) {
	//15% chance to make badass string more 1337
	if (Math.random() < 0.15) {
		for (var i = 0; i < badass_table.length; i++) {
			badass_string = badass_string.replace(badass_table[i][0], badass_table[i][1]);
		}
	}
	return badass_string
}
