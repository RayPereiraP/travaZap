async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`

DUNE

SEVENTH DRAFT

DAVID LYNCH
December 9, 1983
--
1.   ARRAKIS - A SCENE FROM SPACE

Also known as DUNE, home of the Fremen, former
Zenzunni wanderers.

1A.  INT. ROCK LEDGE - SIETCH TABR - NIGHT

BLACK

FADE IN to the dark eyes of the mysterious face of
the REVEREND MOTHER RAMALLO, who sits against smooth
black rock. Her eyes are deep blue-within-blue and
her skin is a haunting translucent white. Her voice
ECHOES as if in a great cavern.

REVEREND MOTHER RAMALLO
We are the secret of the Universe.

RESPONSE OF TWENTY THOUSAND VOICES
Bi-la kaifa.

REVEREND MOTHER RAMALLO
We are the secret of the Universe. We know
of spice...the spice called melange...the
greatest treasure in the Universe. It
exists on only one planet - ours Arrakis,
Dune. We know of spice and the Bene
Gesserit sisterhood's selective breeding
plan of ninety generations to produce the
Kwisatz Haderach, the one the spice will
awaken.

RESPONSE OF TWENTY THOUSAND VOICES
Bi-la kaifa.

REVEREND MOTHER RAMALLO
And now the prophecy...

Silence...then a powerful low organ NOTE resounding
in the cavernous space.

REVEREND MOTHER RAMALLO (CONT'D)
He will come...the voice from the outer
world, bringing the holy war, the Jihad,
which will cleanse the Universe and bring
us out of darkness. He will have been born
of a Bene Gesserit mother.
--
The Reverend Mother continues speaking of the
Prophecy, but we do not hear it. The huge wind organ
BLOWS louder and louder, obscuring her voice.

The picture FADES.

1B.  KAITAIN - A SCENE FROM SPACE

Home planet of House Corrino and Shadam IV, Emperor
of the known universe.

2.   INT. DROP - NIGHT

FADE IN to:

...interior of one drop of water. The image changes
subtly.

2A.  EXT. - DROP - NIGHT

PULL BACK to a shot revealing the outside of the
drop. There is a distant ROARING and within the drop
we can see the distorted image of a space ship
landing on a sophisticated landing field.

3.   (Deleted)

3A. EXT. LANDING FIELD - EMPEROR'S PALACE - NIGHT

On the dark landing field, chemicals spill out of
the ship in troughs and tank-suited Guildsmen begin
to swarm out of a hatch opening.

4. through 6.  (Deleted)

7.   INT. THRONE ROOM - EMPEROR'S PALACE - NIGHT

The EMPEROR is surrounded by crowds of COURTIERS in
his Throne Room.

Suddenly a GUARD enters from a small door and
quickly crosses to ANOTHER GUARD. A warning SOUND
begins. The Emperor turns nervously. Guards quickly
begin to clear the large room. Several women are
rushed toward us to a door beyond. One of the woman,
IRULAN, stops and turns back for a worried, caring
look to her father, the Emperor.

IRULAN
Father.
--
EMPEROR
Irulan.

She sees that SARDAUKAR OFFICERS are surrounding him
now, speaking to him. Irulan turns and leaves. The
Emperor moves away from his officers to the center
of the now-empty room. He drops his golden robe from
his shoulders. He stands in his elegant black
uniform, thinking.

The Reverend Mother is ushered in and the Sardaukar
Officers leave her alone with the Emperor.

EMPEROR
(quickly)
A Third Stage Guild Navigator will be here
within minutes!

REVEREND MOTHER
We felt his presence.

EMPEROR
I shall want telepathy during his visit
and a report when we're finished.

REVEREND MOTHER
Their minds are so.... They move in
strange directions....

EMPEROR
Yes?

REVEREND MOTHER
Forced spice evolution of humans changes
many things.... I must sit close to him.

EMPEROR
He will not permit anyone but me to see
him. You must be outside this room.... Do
what you can.

REVEREND MOTHER
I am your Truthsayer, my lord...
(sensing something outside the room)
He is here, my lord.

Under the carved inscription "Law is the Ultimate
Science", the doors to the Emperor's chambers slide
open and FIFTY GUILDSMEN wheel in a forty-foot long
giant black box. One of the Guildsmen addresses the
Emperor through a translating device.

TANKED GUILDSMEN #1
The Bene Gesserit witch must leave.
--
The Emperor looks to the Reverend Mother.

EMPEROR
Leave us.

REVEREND MOTHER
Yes, my Lord.

EMPEROR
(after she has gone)
We are alone...

8.   INT. HALLWAY - EMPEROR'S PALACE - NIGHT

The Reverend Mother enters through doors and takes a
seat on a chair just outside the door. She closes
her eyes.

9.   INT. THRONE ROOM - EMPEROR'S PALACE - NIGHT

Inside the Emperor's chamber, the TANK-SUITED
GUILDSMEN are arranging themselves in a "V"
formation around the box. Suddenly the box opens,
slowly and beautifully revealing a huge, thick glass
tank. Inside the tank floats a THIRD STAGE NAVIGATOR
twenty feet long, much like a cross between a pasty,
pale human being and a fleshy grasshopper.

The tank is filled with swirling orange spice-gas,
and Guildsmen continuously vacuum up the toxic
chemical spills dripping from under the tank.
Suddenly the Guild Navigator swims towards the
Emperor. His head is enormous and fleshy, like a
huge grasshopper head -- the eyes are totally deep
blue. His voice is a high, fleshy whispering and an
intricate electrical apparatus in the front of the
tank translates into English and broadcasts it into
the room.

NAVIGATOR
We have just folded space from Ix...

EMPEROR
(extremely nervous)
Yes?... How was your journey?

NAVIGATOR
(after a long pause)
Many machines on Ix... new machines.

EMPEROR
Oh yes?
--
NAVIGATOR
Better than those on Richesse.. You are
transparent... I see many things... I see
plans within plans.

EMPEROR
Is there a problem?... Usually there is a
problem when one of you makes a visit.

No answer.

NAVIGATOR
(finally)
The answer is within the problem...

10.  INT. HALLWAY - EMPEROR'S PALACE - NIGHT

Outside the Emperor's chamber the Reverend Mother
sits, her eyes closed, straining.

11.  INT. THRONE ROOM - EMPEROR'S PALACE - REVEREND
MOTHER'S MENTAL IMAGE - NIGHT

A very blurred scene of the Emperor with the Guild
Navigator. She is not getting the English version
but a much different language version which is
fascinating to listen to. A lilting, sing-song
monologue.

12.  INT. THRONE ROOM - EMPEROR'S PALACE - NIGHT

NAVIGATOR
I see two Great Houses -- House Atreides,
House Harkonnen -- feuding... I see you
behind it.

EMPEROR
Yes.

The Navigator breathes the spice-gas heavily and
swishes gently in his tank.

NAVIGATOR
You must share with us.
--
EMPEROR
The Atreides house is building a secret
army!... using a technique unknown to
us... a technique involving sound. The
Duke is becoming more popular in the
Landsraad... he could threaten me.... I
have ordered House Atreides to occupy
Arrakis to mine the spice... thus
replacing their enemies the Harkonnens....
House Atreides will not refuse because of
the tremendous power they think they will
gain. Then, at an appointed time Baron
Harkonnen will return to Arrakis and
launch a sneak attack on House Atreides...
I have promised the Baron five legions of
my Sardaukar terror troops.

NAVIGATOR
So the Harkonnens will rid you of House
Atreides...

EMPEROR
Yes.

13.  INT. HALLWAY - EMPEROR'S PALACE - NIGHT

Outside, the Reverend Mother is seeing the scene
mentally. She suddenly sees and flinches.

14.  INT. THRONE ROOM - EMPEROR'S PALACE - REVEREND
MOTHER'S MENTAL IMAGE - NIGHT

The Guild Navigator turns toward her and comes very
close to her. We hear the Navigator speak to her.

NAVIGATOR
(to Reverend Mother, mentally)
Reverend Mother... I will give you the
Tleilaxu Path.

REVEREND MOTHER (V.O.)
(an excited whisper)
A chance for escape? But for whom?

15.  INT. THRONE ROOM - EMPEROR'S PALACE - NIGHT

EMPEROR
Can you hear me?... If this visit has
anything to do with spice...
--
The Guild Navigator shudders and swishes quite
violently in his tank.

NAVIGATOR
LISTEN TO ME!! The spice must flow... the
spice has given me accelerated evolution
for four thousand years... it has enabled
you to live two hundred years... the spice
helps make the sapho juice, which gives
the red-lipped mentats the ability to be
living computers... the secret side of
spice... the water of life.

16.  INT. HALLWAY - EMPEROR'S PALACE  - NIGHT

REVEREND MOTHER (V.O.)
He shouldn't speak of this...

15.  BACK TO SCENE

NAVIGATOR
...gives the Bene Gesserit sisterhood the
metaphysical ability to see beyond...to
have superior powers... Our power to fold
space is in the spice... Without us, your
empire would be lost on isolated scattered
planets... You would be lost.

EMPEROR
I can assure you...

NAVIGATOR
Do not interrupt!!! Do not speak lightly
of the spice... ONE SMALL POINT...

16.  BACK TO SCENE

REVEREND MOTHER (V.O.)
Here it comes...

17.  INT. THRONE ROOM - EMPEROR'S PALACE - NIGHT

NAVIGATOR
We ourselves... foresee a slight problem
within House Atreides.... Paul.... Paul
Atreides.

EMPEROR
You mean, of course, Duke Leto Atreides...
his father.
--
Page missing
--
24.  EXT. CASTLE CALADAN - NIGHT

High on the rock cliff stands Castle Caladan, Its
appearance us dark and medieval. There is a window
on the seaward wall lit from within...

25.  INT. TRAINING ROOM - CASTLE CALADAN - NIGHT

...by a drifting glowglobe. Paul sits at an L-shaped
table studying filmbooks and maps of Arrakis and the
Universe.

25A. INSERT - FILMBOOK

We SEE vast star fields and galaxies.

25.  BACK TO SCENE

PAUL
(whispering)
Here we are now... nineteen light years
beyond...

25A. INSERT - FILMBOOK

We SEE the galaxies move as we HEAR a HUM.

PAUL (V.O.)
(whispering)
... beyond Epsilon Alangue... is Arrakis.

We HOLD on this, then we see Arrakis grow larger in
the filmbook screen and we SEE it is a planet of
vast deserts.

25.  BACK TO SCENE

PAUL
(whispering again)
It does look dry....

25A. INSERT - FILMBOOK

The picture grows larger again, and we see the
Arrakeen Valley.
--
FILMBOOK (V.O.)
Each day the palms along the outer wall of
the Palace at Arrakeen consume enough
water to sustain the lives of one hundred
men. The palms were placed by the
Harkonnens to flaunt their water wealth in
front of the city Fremen.

25.  BACK TO SCENE

PAUL
Where are the Harkonnens from here?

25A. INSERT - FILMBOOK

The star fields and galaxies move slightly then.

PAUL (V.O.)
(whispering)
There!... Geidi Prime and the Baron
Harkonnen... the enemy.

25.  BACK TO SCENE

In the background, FOOTSTEPS grow louder, pounding
on thick wooden floors. THUFIR HAWAT, GURNEY HALLECK
and DR. YUEH enter. Paul has his back to the door.
Thufir suddenly looks perturbed when he notices
this.

PAUL
(without turning)
I know, Thufir, I'm sitting with my back
to the door.

Hawat suppresses a smile.

PAUL (CONT'D)
I heard you, Dr. Yueh and Gurney coming
down the hall.

THUFIR
Those sounds could be imitated.

PAUL
I'd know the difference.

Paul rises and turns to face them.
--
THUFIR
(inner voice)
Yes. Perhaps he would at that.

PAUL
My father sent you to test me. Music then?

Thufir scowls.

GURNEY
No music. I'm packing this for the
crossing. Shield practice.

PAUL
Shield practice? Gurney... we had practice
-- this morning..... I'm not in the mood.

GURNEY
(angered)
Not in the mood?! Mood's a thing for
cattle and love play... not fighting.

PAUL
I'm sorry Gurney.

GURNEY
Not sorry enough.

Gurney draws his knife.

25B. SHIELD EFFECT - THE FIGHT

Gurney activates his body shield, sending a
shimmering FORCE FIELD around his body. He advances
swiftly toward Paul. Paul snaps on his FORCE FIELD,
draws his knife and jumps back, collecting himself
hurriedly for the fight.

GURNEY
(his voice sounding strange through
the forcefield)
Guard yourself for true!

Gurney leaps high, then forward, pressing a furious
attack. Paul falls back. The shield edges CRACK
loudly as they touch each other.

PAUL
(inner voice)
What's gotten into Gurney? He's not
faking.
Paul presses forward and the fight moves quickly
around the room. The smell of ozone grows stronger
as the shields hit and SPARK off one another. Paul
directs a parry downwards, turns, and leads Gurney
against the table, plunging at just the right moment
to pin Gurney against the table top with his blade
right at Gurney's neck.

PAUL
(strange shielded voice)
Is this what you seek?

GURNEY
(strange shielded voice)
Good... the slow blade penetrates the
shield... but look down.

Paul looks and sees Gurney's blade at his groin.

GURNEY (CONT'D)
We'd have joined each other in death.
However, you did seem to finally get the
"mood".

PAUL
Would you really have drawn my blood?

GURNEY
If you'd fought one whit below your
abilities I'd have scratched you a good
one.

Paul stands and snaps off his shield as does Gurney.

25.  BACK TO SCENE

PAUL
Things have been so serious here lately.

GURNEY
Yes. I sensed the play in you lad, but
this can no longer be play. Tomorrow we
leave for Arrakis! Arrakis is real. The
Harkonnens are real.

Thufir, Yueh, Gurney and Paul stare at each other
for a moment in silence. Dr. Yueh moves forward and
begins to take Paul's pulse rate and to collect
other data with a small black machine.

PAUL
Dr. Yueh, do you have any information on
the worms of Arrakis?
--
DR. YUEH
I have obtained a filmbook on a small
specimen... only 125 meters long.

PAUL
Only?!

They smile at each other.

DR. YUEH
There are have been documented sightings
of worms as large as 450 meters in the
deep desert -- far from where we'll be in
Arakeen.... The desert belt and the south
polar regions are marked forbidden....
Why?

PAUL
The storms and the worms. Is it true, that
the sand can blow at seven hundred
kilometers per hour?

YUEH
It can render flesh to dust in minutes.
And these dry winds can generate
tremendous static electricity in the
atmosphere. Our body shields won't have
enough power to operate in the open air on
Arrakis.

PAUL
Well, how do the Fremen survive there?

YUEH
We don't know much about the Fremen...
They live in the deep desert... some of
them in the cities and they have blue-
within-blue eyes...

PAUL
(smiling)
The eyes -- yes, yes... saturation of the
blood by the spice -- melange. Could the
spice affect us in other ways?

THUFIR
Many dangers exist on Arrakis. For one, we
know the Harkonnens would not have given
up their CHOAM company contract so easily.

PAUL
(rising)
The Harkonnens are our enemies, yes... but
behind them, I suspect, is the Emperor.
--
THUFIR
You will make a formidable Duke!

Paul bows.

THUFIR (CONT'D)
Now remember... the first step in avoiding
a trap is knowing of its existence.

PAUL
I know.  But if it is a trap then why are
we going?

THUFIR
We have our new army.
(in the same breath)
Dr. Yueh, put the weirding module on him.

Thufir, noticing a SQUAD OF GUARDS at the other end
of the training room, calls out to them.

THUFIR (CONT'D)
Clear and lock the room.

Gurney activates a series of locks.  LIGHTS GLOWS
above each doorway.

THUFIR (CONT'D)
Activate a fighter.

25C. ROBOT FIGHT

Suddenly a FIGHTER ROBOT lowers from the ceiling.
As the robot begins to rotate and go through several
frightening, complicated movements, Dr. Yueh places
a plastic device around Paul's neck.  He tightens it
around the Adam's apple above Paul's voice box.
Paul turns and emits a very strange, powerful sound
through the weirding module as he rushes towards the
robot.

GURNEY
(to Yueh)
Precise control....

26.  INT. HALLWAY - CASTLE CALADAN - NIGHT

The hallway is empty in the foreground but in the
distance a changing of the guard is seen.
--
26A. through 26B.   (Deleted)

27.  INT. HALLWAY - CASTLE CALADAN - NIGHT

Paul walks down the stairway.  In the distance,
moving troops are packing Atreides belongings.
Beyond, Paul sees some troops carrying a large
bull's head.  The horns are covered with dried
blood.

PAUL
The bull that killed my grandfather... is
this an evil omen?

Suddenly, DUNCAN IDAHO appears from behind the giant
black head.

PAUL
(happily)
Duncan!

DUNCAN
Paul.
(they shake hands)
I was on my way to say goodbye to you.  I
have to go on ahead.

PAUL
Why?  I wish you were coming with us.

DUNCAN
It's something for your father.  He wants
to talk to you.
(places hand on Paul's chest)
I'll see you in Arrakis.  May the hand of
God be with you.

PAUL
May the hand of God be with us all,
Duncan.

28.  EXT. CLIFF WALL - CASTLE CALADAN - NIGHT

Paul walks to meet his father near the wall.

PAUL
(diffident)
Father.

DUKE LETO
Thank you for joining me, Paul.
(voice tired)
It will be good to get to our new home and
have all this upset behind us.
--
28A. (Deleted)

28B. DUKE LETO AND PAUL AGAINST SEA

They look out over the sea.  A huge wave crashes
below.

The Duke turns to Paul.

DUKE LETO (CONT'D)
(inner voice)
My son.
(out loud)
Thufir Hawat has served House Atreides
three generations....  He swears you are
the finest student he's ever taught.
Yueh, Gurney and Duncan say the same....
It makes me feel very proud...

PAUL
I want you to be proud of me.

Paul smiles up at his father.  The WIND blows the
Duke's hair and behind him stands the castle and the
green and black Atreides banner against the night
sky beyond.  The RAIN starts again -- lightly.  Paul
takes a closer look at the Atreides banner moving in
the wind.

DUKE LETO
(studying the dark sea below)
I'll miss the sea... but a person needs
new experiences... they jar something deep
inside, allowing him to grow.  Without
change, something sleeps inside us... and
seldom awakens... The sleeper must awaken.

Paul's attention goes to his father's hand where he
sees the Duke's signet ring.  Again he smiles at his
father.

        FADE TO:

29. through 29A.    (Deleted)

30.  INT. PAUL'S ROOM - CASTLE CALADAN - NIGHT

Paul is sweating during his sleep and WHISPERS as if
struggling with some disturbing thought.
--
PAUL
Arrakis... Dune... Desert
Planet...Arrakis... Desert Planet...
moving... moving.

31.  DARK WATER - MENTAL IMAGE

We see Paul's dream. It is very dark.

PAUL (V.O.)
Arrakis... Dune... Desert Planet.

Suddenly a drop falls into the black, and white hot
widening rings appear on the dark water's surface.

Darkness again. Two moons rise in the darkness. As
the second appears:

VOICE
The second moon, your moon...

31A. INT. RESERVOIR - SIETCH TABR - NIGHT

Dark again. A figure turns toward Paul. It is a
BEAUTIFUL GIRL in deep shadow. She speaks.

BEAUTIFUL GIRL
Tell me of your homeworld, Usul.

32.  INT. PAUL'S ROOM - CASTLE CALADAN - NIGHT

CU Paul's face in fitful sleep.

33.  EXT. COURTYARD - CASTLE CALADAN - NIGHT

In a small stone courtyard, the back-lit figure of a
woman moves towards us through the heavy RAIN and
darkness. As she nears us, the large, protective
glowglobe overtakes her and in an instant we see a
beautiful woman -- JESSICA.

JESSICA
(inner voice)
I  know she has come to test him... no man
has ever been tested with the box... only
Bene Gesserit women. I may lose my son.

The doors open, she meets the Reverend Mother Gaius
Helen Mohiam (the Emperor's truthsayer) and takes
her back toward the Castle. The rain rushes loudly
into the storm drains.
--
34.  INT. PAUL'S ROOM - CASTLE CALADAN - NIGHT

PAUL
(whispering again)
Arrakis... Dune... Desert planet...
moving... moving.

CU Paul's face.

Paul's eyes snap open. He hears footsteps outside
his door. As the door opens he closes his eyes,
however, and he pretends to be asleep. Jessica and
the Reverend Mother enter and stand in the doorway
looking at him.

REVEREND MOTHER
We'll salvage what we can... but I can
tell you.. dear God... for the father...
nothing.

Jessica turns to the Reverend Mother, stunned! She
turns back to look at Paul. Her hands tremble.

REVEREND MOTHER (CONT'D)
Did you really think that you could bear
the Kwisatz Haderach?... How dare you!

REVEREND MOTHER
My greatest student... and my greatest
disappointment.... He's awake!... He's
listening to us.
(considering)
Good... Ready yourself, young Paul
Atreides... I want to see you in your
mother's chamber in one quarter of an
hour.

She turns and walks away. Jessica remains at the
door and calls out to Paul in the darkness.

JESSICA
Paul?... This is very important...

Jessica leaves, closing the door behind her. Paul
sits up in bed.

PAUL
Kwisatz Haderach?... For the father...
nothing?

35.  INT. JESSICA'S CHAMBER - CASTLE CALADAN - NIGHT

Jessica and the Reverend Mother enter. It is quite
dark. Jessica WHISPERS a code number and a glowglobe
LIGHTS on a very dim setting.
--
REVEREND MOTHER
(angrily)
Jessica... You were told to bear only
daughters to the Atreides... Jessica!

JESSICA
It meant so much to him...

REVEREND MOTHER
You thought only of a Duke's desire for a
son?... Desires don't figure in this! An
Atreides daughter could have been wed to a
Harkonnen heir and sealed the breach. We
may lose both blood lines now.

JESSICA
I vowed never to regret my decision. I'll
pay for my own mistakes.

REVEREND MOTHER
And your son will pay with you.

42.  INT. DUKE LETO'S QUARTERS - CASTLE CALADAN - NIGHT

Under a dim glowglobe, the DUKE is writing a note on
a scroll-like piece of paper.

Finishing reading, the Duke seals the message in a
cylinder and presses his signet ring, with a red
hawk symbol of House of Atreides, into a hole, which
seals the cylinder with a swift HISSING.

He pauses, studying the metal tube. With a VOICE
COMMAND, he extinguishes the glowglobe above him. He
leans back in his chair as lightning flashes outside
the window.

FADE TO:

35.  BACK TO SCENE

Paul enters the room and Jessica closes the door
behind them.

JESSICA
Paul, this is the Reverend Mother Gaius
Helen Mohiam. She is going to... observe
you...
(to Reverend Mother)
Please...
--
REVEREND MOTHER
Jessica, you know it must be done. I
enjoin you to stand guard at the door and
practice the meditation of peace.

JESSICA
Your Reverence.

PAUL
(inner voice)
What does she fear?
(out loud)
What about my Father?

JESSICA
Paul... please, Paul... listen to the
Reverend Mother and do what she tells you.

Jessica leaves the room. The Reverend Mother speaks
to Paul using The Voice, a Bene Gesserit training
which permits an adept to control others merely by
selected tone shadings of the voice. It sounds as if
two people are talking -- one normal and the other
gutteral and slightly electronic. The effect is
strange, yet subtle.

REVEREND MOTHER
(using The Voice)
Now you come here.

Paul finds he cannot help but obey her, yet he
fights her controlling him.

PAUL
(inner voice)
She's using The Voice.
(out loud)
No.

She sees him struggling.

REVEREND MOTHER
(inner voice)
Some strength there. Surprising!
(out loud)
Come here.

The Reverend Mother holds up a green metal cube.

REVEREND MOTHER (CONT'D)
See this... Put your right hand in the
box.

Paul stares at the hole in the box.
--
PAUL
What's in the box?

REVEREND MOTHER
Pain.

Just then, she raises one hand to his neck. Paul
sees a glint of metal. He tries to back away.

REVEREND MOTHER (CONT'D)
(The Voice)
STOP! Put your hand in the box.

Paul's hand goes in. Fear passes over his face.

PAUL
(inner voice)
The Voice again.

REVEREND MOTHER
I hold at your neck the gom jabbar. Don't
pull away or you'll feel that poison. A
Duke's son must know about many poisons --
this one kills only animals.

PAUL
Are you suggesting a Duke's son is an
animal?

REVEREND MOTHER
Let us say I suggest you may be human.
Your awareness may be powerful enough to
control your instincts. Your instincts
will be to remove your hand from the box.
If you do so you will die. You will feel
an itching -- there... see? Now the
itching becomes burning... heat, upon
heat, upon heat.

PAUL
(whispering)
It burns.

REVEREND MOTHER
SILENCE... SILENCE.

PAUL
(inner voice)(struggling to compose
himself)
I must not fear. Fear is the mind-killer.
Fear is the little death that brings total
obliteration. I will face my fear... I
will permit it to pass over me and through
me.
--
The Reverend Mother moves her face up to his. Her
ancient face with its metal teeth gleaming inches
away breathes hotly. She is smiling.

REVEREND MOTHER
You feel the flesh crisping?

36.  THE HAND - PAUL'S MENTAL IMAGE

Paul's inner mind sees his hand on fire with all
sorts of sores. The skin is bubbling.

37.  INT. JESSICA'S CHAMBER - CASTLE CALADAN - NIGHT

REVEREND MOTHER
Flesh dropping off.

38.  THE HAND - PAUL'S MENTAL IMAGE

He pictures this. The destruction of his hand is
complete -- now only blood spurts out and burns.

39.  INT. JESSICA'S CHAMBER - CASTLE CALADAN - NIGHT

Paul's face registers extreme pain.

PAUL
(cannot help the explosion)
THE PAIN!

REVEREND MOTHER
NO!! ENOUGH!! Kull wahad! No woman child
ever withstood that much. I must have
wanted you to fail. Take your hand out of
the box and look at it, young human.... Do
it!

Paul pulls his hand out of the box. No sign of
anything wrong. He turns his hand, flexes his
fingers. He looks to the Reverend Mother.

REVEREND MOTHER (CONT'D)
(explaining)
Pain by nerve induction... A human can
resist any pain. Our test is crisis and
observation.

PAUL
I see the truth of it.
--
REVEREND MOTHER
(inner voice)
Could he be the one?... Maybe... but will
he be ours to control?
(out loud)
You know when people speak the truth?

PAUL
I know it.

Suddenly the Reverend Mother holds her hand against
Paul's head. She closes her eyes.

40.  INT. RESERVOIR - SIETCH TABR - NIGHT - REVEREND
MOTHER'S MENTAL IMAGE

She sees a blurred image of Paul's earlier dream.
She sees the beautiful girl turn. She hears a
muffled voice say "Tell me of your homeworld, Usul".

41.  INT. JESSICA'S CHAMBER - CASTLE CALADAN - NIGHT

REVEREND MOTHER
Your mother wants you to tell me about
your dreams. I only want to know one
thing.... Do they come true?

PAUL
Not all of them... I know which ones will.

REVEREND MOTHER
Perhaps you are the Kwisatz Haderach.

PAUL
What is it?

REVEREND MOTHER
(profoundly)
The person who can be many places at
once... the one who bridges space and
time.... He will look where we cannot.

PAUL
Where?

REVEREND MOTHER
Do you know of the Water of Life?... the
Truthsayer drug?

PAUL
I have heard of it.
--
REVEREND MOTHER
It is very dangerous... very painful. The
Bene Gesserit sisterhood drink it to see
within.... There is a place terrifying to
us... to women. It is said a man will
come... the Kwisatz Haderach... he will go
where we cannot... Many men have tried...

PAUL
Did they try and fail?

REVEREND MOTHER
They tried and died....
(she calls out loudly)
Jessica!

Jessica enters immediately and sees with great
relief that Paul is still active.

REVEREND MOTHER
I sense your teachings in him. Ignore the
regular order of training. His safety
requires The Voice.

PAUL
I've heard enough of my safety... What
about my father?... I heard you talking.
You speak as if he was dead. Well, he
isn't!

JESSICA
Paul!

She tries to hold him.

PAUL
Well he isn't... and he won't die... Tell
me he won't die!

REVEREND MOTHER
What can be done has been done.

PAUL
MOTHER! Tell me!

The Reverend Mother covers herself and moves quickly
to the door.
--
42A. Through 45.    (Deleted)

46.  EXT. GEIDI PRIME - DAY

HOME PLANET OF HOUSE HARKONNEN - As seen from space,
the black planet as we saw it in Paul's filmbook.

47.  EXT. GEIDI PRIME - DAY

The surface of the planet is a vast sea of black
oil. A small cable car traverses high above the sea
toward a gigantic black city in the shape of a
rectangular box over 100 stories high. Before the
city there are rows of huge black towering steel
heads atop massive furnaces. SMOKE billows out of
their mouths.

48.  INT. CABLE CAR - GIEDI PRIME - DAY

Inside the cable car stands PITER. In one hand he
holds the cylinder with DUKE Leto's ring imprint.

PITER
It is by will alone I set my mind in
motion.
It is by the juice of Sapho that thoughts
acquire speed -
The lips acquire stains -
The stains become a warning -
It is by will alone I set my mind in
motion.

48A. INT. GREEN PORCELAIN ROOM - GEIDI PRIME

Somewhere in the interior of Geidi Prime, we are in
a green porcelain room. Two large Harkonnen
soldiers, using large hoses, are washing down the
walls and floors of the room. WE MOVE DOWN into the
water rushing along the floor towards troughs.
Closer, WE SEE bits of flesh, hair, and blood.

49.  EXT. GEIDI PRIME - DAY

The car zooms past gigantic faces, and the furnaces
far below ROAR with tremendous power. The city now
looms gigantic and overpowering -- millions of
electrical cables stretch off the top into dark
energy taps above the city.
--
50.  INT. GEIDI PRIME - DAY

Inside the city the cable car passes into a huge
inner chamber filled with open-topped lime green
porcelain rooms with tremendous electrical lines
criss-crossing above.

51.  (Deleted)

52.  INT. BARON'S ROOM - GEIDI PRIME - DAY

In front of a huge steam boiler, the cable car stops
and Piter gets out, steps down steel stairs and
enters a porcelain room where the Baron is being
treated by a DOCTOR for sores on his face and body.
The doctor uses a lasbeam on a big sore on the
Baron's lips. The Baron is sickly and hugely fat and
sweaty and looks like he has been sickly for some
time. He turns to Piter as he enters the room.

PITER
My Lord!

BARON
Piter.

Piter moves up to the Baron.

PITER
The Atreides will be leaving Caladan soon,
Baron, and I have here your answer from
Duke Leto.

BARON
What does Leto say, Piter?

PITER
He wishes to inform you that Vendetta --
as he puts it, using the ancient tongue,
the art of Kanly -- is still alive. He
does not wish to meet or speak with you.

BARON
(swallowing; angry)
I made my peace gesture... the forms of
Kanly have been obeyed.

He throws down the cylinder.

PITER
As you instructed me, I have enlightened
your nephews concerning my plan t...
--
BARON
My plan!

PITER
The plan to crush the Atreides.  Feyd,
Rabban... go quietly... no other great
house of the Landsraad must ever know of
the Emperor's aid to the Baron.  The
entire Landsraad would turn against the
Baron and the Emperor.

DOCTOR
Put the pick in there Pete
And turn it round real neat.

His assistant does so.

Rabban breaks open a squood (living food).  The
squood makes a tiny SCREAM, then Rabban drinks the
blood and bodily fluids.  He throws the empty
container of tiny animal meat into the dark water
trough running through the center of the room.
Across the room, TWO HARKONNEN SOLDIERS enter,
holding big guns on a BOY who is wearing white
pants.  The Baron smiles when he sees the boy, who
is deeply afraid.  The guards force the boy to
arrange violet flowers on a stand by the far wall
opposite the Baron.

BARON
(as the Baron watches the boy)
You're so beautiful my Baron
Your skin, love to me
Your diseases lovingly cared for
For all eternity.

BARON
I will have Arrakis back for myself... he
who controls the Spice, controls the
universe... and what Piter didn't tell you
is we have control of someone who is very
close to Duke Leto.  This person... this
traitor... will be worth more to us than
ten legions of Sardaukar.

FEYD
Who is the traitor?

BARON
(laughs)
I won't tell you who the traitor is or
when we'll attack.  However, the Duke will
die before these eyes and he'll know that
it is I -- Baron Vladimir Harkonnen -- who
encompasses his doom.
--
The Baron gives a hand signal and seven gates in the
wall open, emitting tremendous SOUNDS.  Suddenly the
Baron begins to float straight up, twenty-five feet
in the air.  It is a frightening sight.  He floats
down under the giant, humming electrical tube light
and rubs his head and body with a black fluid which
drips from tiny holes in either side of the pink
glow.  Feyd and Rabban watch nervously.  The
Attendants stand completely still with fear.

The Baron swoops down to the Boy, who stands
petrified.  The Harkonnen guards smile nervously as
they step slightly backwards.  The boy begins
SCREAMING as the Baron pulls the boy's heart plug,
located in his chest.  The violet flowers are bumped
and disarrayed by the violence which ensues.  Then
the Baron turns smiling to Feyd as the SOUNDS
continue to roar.

52A. through 52B.   (Deleted)

52C. EXT. ATREIDES SHIP - CALADAN - DAY

A DRUM CORPS pounds out a powerful cadence in front
of a water and cannon show as the Duke, Paul and
Jessica mount the steel stairs to their ship.  In
the doorway, they turn back for a final look.

The Duke places a hand on Paul's shoulder.  We see
the signet ring.  Jessica is there.  She tries to
get Paul to look at her but he scowls and turns to
his father.

JESSICA
(turning away)
(inner voice)
I must not fear.  Fear is the mind-
killer... the little death that brings
total obliteration...

The door of the spaceship closes.

53.  EXT. HEIGHLINER - SPACE

3,415 Atreides ships are approaching the Guild
Heighliner, which is staggeringly colossal.  The
Atreides ships look like dots next to the sun.  The
Duke's ship enters the frame and moves toward the
Heighliner.

53A. through 54.    (Deleted)
--
55.  INT. ATREIDES SHIP - SPACE

Paul, Jessica and Duke Leto look out the forward
viewing glass as tiny lights move outside in the
darkness. They hear and feel their ship stop with a
huge, echoing, metallic jolt. They look at each
other in the silence which follows.

DUKE LETO
Soon they'll begin to fold space.

PAUL
(inner voice)
Far off in the control rooms....
Travelling without moving.

They wait.

56.  (Deleted)

57.  INT. CONTROL ROOM - HEIGHLINER - SPACE

We pass through electrical shields into a 2,000-foot
high control room filled with orange spice gas. On
the floor are large gratings covering an exhaust and
filtering system. Tons of spice gas are being
converted into the clouds of gas along a wall of
machinery. From within a dark metal tunnel comes a
Guild Navigator. He exits the tunnel and swims
through the gas 1,000 feet to a six-dimensional
layered miniature replica of the entire Universe.
The Navigator emits a long piece of light from his
mouth which travels to one edge of the Universe and
changes into a likeness of the planet Caladan. The
Navigator turns and emits another piece of light
which travels to the opposite side of the Universe.
It changes into a likeness of Arrakis. The Navigator
begins to put his slender fingers in amongst the
stars and he emits SOUNDS and bursts of light into
the mass of stars and galaxies. The Universe begins
to vibrate and elongate, then to curve. Electrical
lightening traverses from Caladan to Arrakis as the
Universe bends into a U-shape. Arrakis submerges
deep into the light. The navigator swims to the
point where Arrakis disappeared. He begins to pull
and tear a hole in the Universe. Stars like sparks
and SOUNDS and rings of light appear, along with a
roaring WIND. The Navigator swims deep into this
hole through the rings of light. The Navigator
becomes more and more transparent, until he's lost
in darkness. The sounds fade.
--
58. through 60.     (Deleted)

60A. EXT. HEIGHLINER - ABOVE ARRAKIS - SPACE

Suddenly, the real planet Arrakis appears and the
giant Heighliner materializes above it.

61. through 63A.    (Deleted)

63B.      EXT. ARRAKEEN - DAY

Through a brownish-orange haze appears the dusty
valley of Arrakeen.

64.  INT./EXT. THE ATREIDES SHIP - DAY ARRAKEEN

The Atreides ship has landed at Arrakeen. The door
is open - the family walk down the steps - DUKE LETO
with his dog - PAUL and JESSICA.

64A. through 64C.   (Deleted)

65.  EXT. GROUNDS - ARRAKEEN PALACE - DAY

... clusters of troops standing at attention around
the enormous dark, cool doorway as the Duke, Paul
and Jessica enter the Palace.

65A. through 65B.   (Deleted)

65C. EXT. PALACE - ARRAKEEN - DAY

The Atreides banner is raised on the top of the
Palace.

66.  (Deleted)
--
67.  INT. MILITARY SUB-BASEMENT ROOM - ARRAKEEN PALACE -
DAY

Atreides army soldiers milling, YELLING noisily.

68.  INT. PASSAGEWAY - ARRAKEEN PALACE - DAY.

In a darkened passageway, fans turn, casting deep,
slow-moving shadows. SOUNDS ECHO in the distance.

69.  INT. COMMUNICATIONS ROOM - ARRAKEEN PALACE - DAY

A room of technicians and electronic gear. The
SIGNALS are being heard and interpreted.

ATREIDES TECHNICIAN
Harkonnens.

70.  EXT. BLACK ROCK - ARRAKEEN - DAY

Far in the distance in deep black rock, Harkonnen
spies move, carrying strange electronic equipment.

71.  (Deleted)

72.  INT. PASSAGEWAY - ARRAKEEN PALACE - DAY

Thufir marches down a hallway with a squad of TROOPS
with electronic gadgetry, LIGHTS and SOUNDS going
constantly.

THUFIR
(into a radio microphone)
Why isn't the shield up yet?

73.  INT. GENERATOR ROOM - ARRAKEEN PALACE - DAY

Down in the basement, Atreides engineers are
removing a complicated device from heavy machinery.
A MAN radios back to Thufir.

ATREIDES RADIO MAN
We found and removed another sabotage
device. I think it will go up now.
--
The engineers activate a series of atometric
Holtzman generators. Suddenly SOUNDS begin. The
machines start; at first low, then they WHINE
upwards to a high pitch. When the pitch is steady, a
series of levers are pulled.

74.  EXT. PALACE - ARRAKEEN - DAY

Just after the second set of levers is pulled, a
huge house shield is seen going up in a box shape,
encompassing the Palace with SHIMMERING protection.

75.  EXT. WINDOW - ARRAKEEN PALACE - DAY

From a small window, Thufir observes the shield with
a critical eye.

THUFIR
(inner voice; worried)
We found these sabotage devices too
easily...

76.  INT. GREAT HALL - ARRAKEEN PALACE - DAY

Two giant glowglobes drift into the Great Hall where
Jessica and Dr. Yueh stand watching a giant bull's
head is being hung above the massive fireplace. The
MOVING TROOPS are unpacking crates and organizing
furnishings. Jessica watches them. Distant SOUNDS
reverberate inside an elaborate air vent beside
them.

DR. YUEH
Listen here.... You can here the people of
Arrakeen outside.... Can you here the cry
"Soo Soo Sook" of the water sellers?

JESSICA
So many reminders of the scarcity of
water.

DR. YUEH
Have you noticed the line of palms along
the wall... the Harkonnen put them in...
to flaunt their water wealth in front of
these people.... Each day those palms take
enough water to sustain the life of one
hundred men.

JESSICA
The way you say Harkonnen... I didn't know
you had so much reason to hate them.

DR. YUEH
(swiftly)
My wife... you didn't know my wife...
they...
--
JESSICA
(out loud)
Forgive me...
(inner voice)
... His wife was Bene Gesserit too... the
signs are al over him.... They must have
killed here.

Jessica sees a droplet of sweat break out on Yueh's
cheek.

DR. YUEH
I'm sorry I'm unable to talk about it.

Above them a series of iron curtains begins to open
over deep rock window slots, sending  narrow shafts
of light down across the room. TWO ATREIDES WOMEN in
uniform approach.

ATREIDES WOMAN #1
(referring to several robed figures
standing in the room)
My lady... the local people... the maids
and servants await your inspection. Hawat
has cleared them.

Dr. Yueh turns to Jessica.

DR. YUEH
The Harkonnens may have tampered
medically.... please wait.

He turns a yellow light on a moves it over the
crowd. The yellow light beam plays over the blue-
within-blue eyes. One of the women, the Shadout
Mapes, watches Jessica continuously. Yueh's hand
shakes slightly.

JESSICA
(inner voice; noticing Yueh's hands)
He's hiding something -- holding something
back.
(She studies his face closely.)
It's not just his wife... He's a good man
though. He's probably trying to save my
feelings...
(We see her mouth.)
I could use The Voice... make him tell
me... It would only shame him.
(We see her eyes.)
I must place more trust in my friends.
(We see Yueh turn toward her,
fearful.)
--
77.  INT. PASSAGEWAY - ARRAKEEN PALACE - DAY

Paul wanders through the darkened passageways alone,
his footsteps echoing as goes. He takes pleasure
observing the details of the rock Palace but all the
while he feels an uneasiness -- a feeling of fear
builds in him.

78.  INT. PAUL'S BEDROOM - ARRAKEEN PALACE - DAY

Paul enters a small bedroom and sits down on the
bed. He opens the filmbook, and activates it.

78A. INSERT - FILMBOOK

We SEE a gigantic carryall lower down above a spice
harvester and pick it up off the desert floor as a
narrator speaks over.

NARRATOR (V.O.)
One carryall handles four spice mining
teams; however, it will fly only two
harvesters at a time. Today, we have nine
hundred and thirty harvesters and nine
hundred and eighty-one carryalls....

78.  BACK TO SCENE

Paul looks up. Across the room he sees a tray of
small pastries which have been laid out. He goes to
them and scans them with his poison detector, which
he carries on his belt. A pleasant tone SOUNDS and
the word "safe" appears in green light. Paul takes a
pastry bites it and turns back towards the bed.
Suddenly he stops. He looks at the pastry.

PAUL
(inner voice)
Spice...

As he continues eating he notices the sunlight
through the slates over the window begins to GLOW
white hot. Paul's eyes are intense as the light
GLOWS brilliantly.

PAUL (CONT'D)
(whispering inner voice)
Terrible purpose.... What is it?

78B. INSERT - RED DROPLETS

Some red droplets appear rushing through the white
light. Three images follow:

MENTAL IMAGES:

79.  INT. CONTROL ROOM - EMPEROR'S PALACE - DAY

A blurred Guild Navigator.
--
Page Missing
--
SHADOUT MAPES
I am the Shadout Mapes... the housekeeper.

PAUL
A Fremen... Could she be the operator?
No...

SHADOUT MAPES
I must cleanse the way between us.... You
saved my life... and we  Fremen pay our
debts. It's known to us that you've a
traitor in your midst. Who it is we cannot
say but we're certain of it.

PAUL
(inner voice)
A traitor...

Before he can speak the Shadout Mapes is gone --
running off down the passageway. Jessica enters.

PAUL (CONT'D)
(looks to Jessica)
There is a traitor among us.

80A. (Deleted)

81.  INT. PASSAGEWAY - ARRAKEEN PALACE - DAY

Running TROOPS storm down the hallway with
electronic gear and big stun guns.
--
82.  INT. PASSAGEWAY - ARRAKEEN PALACE - DAY

Thufir walks quickly toward SEVERAL TROOPS.

THUFIR
Set up a sonar probe immediately!

83.  INT. AUTOPSY ROOM - ARRAKEEN PALACE - DAY

Dr. Yueh sticks his head out the doorway as SEVERAL
TROOPERS run past.

84.  INT. OBSERVATION ROOM - ARRAKEEN PALACE - DAY

Duke Leto is calling on a radio phone. GENERALS
surround him, as well as Gurney.

DUKE LETO
(on phone)
Thufir?... anything?... keep looking.
(Inner voice)
...and a traitor... God help us.

85.  INT. SUB-SUB-SUB-BASEMENT - ARRAKEEN PALACE - DAY

TROOPS come off an elevator. The glow-span indicates
the very bottom floor of 18 sub-floors. The ground
is uneven rock and the ceiling is low. The troops
fan out shining chemical lamps here and there. A
soldier suddenly stops. Ahead in his light is a dead
Harkonnen -- bloody vomit dried around his mouth. He
lies beside an electronic device.

86.  INT. AUTOPSY ROOM - ARRAKEEN PALACE - DAY

Dr. Yueh covers his face with his hands in a
darkened room... sobbing.

86A. EXT. WALL - ARRAKEEN PALACE - NIGHT

SEARCHLIGHTS sweep over the faces of City Fremen who
are sitting or moving solemnly around the outer wall
of the Palace. Some are chanting "Mahdi" and "Lisan
al-Gaib." Others hold up one open hand as a sign
they feel the messiah is near. A slow-moving spike-
backed dog sucks ants up out of a small anthill; he
snorts.

86B. INT. GREAT HALL - ARRAKEEN PALACE - NIGHT

In the darkened Hall we can HEAR the distant sound
of the Fremen reverberating.
--
87.  INT. OBSERVATION ROOM - ARRAKEEN PALACE - DAY

Duke Leto sits with Paul, Thufir, EIGHT GENERALS and
SIX SUB-LIEUTENANTS. The Duke's small dog wanders
under the table and rests his head on the Duke's
boot. In front of Thufir is a device FLASHING
brilliant light bursts over his face. The others are
all talking among themselves. Suddenly Thufir's face
turns brilliant red (as red as his sapho-stained
lips) and he begins speaking rapidly into the
machine in code using a strained high voice.
--
THUFIR
(Mentat voice)
Sector 6 - 80 -- copy the sixth -- the
summit -- the eight the quadrant over the
ninth plus eighty -- four circles -- weave
the eighty and call the fourth copy --
enter nine -- seven by seven a seven the
seven call seven B seven -- enter the
circles call the sixth copy the sixth over
the summit.... eight.

The machine FLASHES several bright irregular
SIGNALS. Then it stops and HUMS. The blood leaves
Thufir's face.

THUFIR (CONT'D)
(very fast and casually)
Eight.... Thufir Hawat... Mentat... Master
of Assassins.

The hum stops. Thufir turns to Duke Leto. He looks
up. Everyone is quiet now.

THUFIR (CONT'D)
The Palace is now secure. The city of
Arrakeen is under martial law... we have
troops here headquartered underground on
sub-floors six through ten. The rest of
the troops are stationed in Arrakeen and
we have some on the airfield. Our new army
is still training, but everything is
shielded.... With the shielding, we are
impenetrable. Dr. Kynes is waiting, Sire,
for your inspection of spice mining
operations, but since the attempt of the
young master, I am against your leaving
the Palace.

DUKE LETO
(very angry)
The attempt failed... Harkonnen captives
have already been taken. We must crush the
Harkonnen machine on Arrakis.... You all
know what to do.
(Turning towards Gurney)
...Gurney! We desperately need more spice
miners... many are threatening to leave on
the next shuttle. We need spice drivers,
weather scanners, dune men ... any with
open sand experience. You must persuade
them to enlist with us.
--
GURNEY
They shall come all for violence: their
faces shall sup as the east wind. And they
shall gather the captivity of the sand.

DUKE LETO
(squints at Gurney)
Very moving, Gurney. On your way... and
take care of Dr. Kynes until Paul and I
arrive. We will not be prisoners here in
this place.

GURNEY
(artfully easing the Duke's anger)
Behold as a wild ass in the desert go I
forth to my work.

Gurney strides off. Thufir sits, contemplating. Paul
and Duke Leto smile at each other and shake their
heads.

88.  INT. JESSICA'S CHAMBER - ARRAKEEN PALACE - DAY

Jessica is sitting in a small room, smiling, reading
a note. It reads "I miss you. Leto." She sets the
note down. She begins to tremble. She becomes
fearful. In her mind she SEES quick images:

MENTAL IMAGES

89.  INT. CONTROL ROOM - HEIGHLINER

A blurred Guild Navigator.

89A. INT. MAKER ROOM - SEITCH TABR - NIGHT

Paul dead on a stone floor.

89B. EXT. ARRAKEEN PALACE - NIGHT

Fire burning.

90.  INT. JESSICA'S CHAMBER - ARRAKEEN PALACE - DAY

Jessica continues to tremble.

JESSICA
(inner voice)
I must speak with you Leto!
--
91.  INT. PASSAGEWAY - ARRAKEEN PALACE - DAY

Outside in the passageway, feet suddenly move
quietly toward the door to Jessica's room.

92.  INT. JESSICA'S CHAMBER - ARRAKEEN PALACE - DAY

Jessica HEARS this and looks up just as the Shadout
Mapes silently enters her room.

JESSICA
(staring at the blue-eyed woman --
waiting for possible danger.)
Yes?

SHADOUT MAPES
I am the Shadout Mapes, your housekeeper,
Noble Born. What are your orders.

JESSICA
You may refer to me as "my lady." I am not
noble born. I'm the bound concubine of
Duke Leto -- mother of the heir
designate.... "Shadout"... that's an
ancient word.

MAPES
(strangely asked)
You know the ancient tongues?

JESSICA
I know the Bhotani Jib and Chakobsa, all
the hunting languages.

MAPES
As the legend says.

JESSICA
(inner voice)
That's it! The Missionaria Protectiva has
been here planting protective legends
against a day of Bene Gesserit need. And
that day has come. I must play out this
sham.
(out loud)
I know the Dark things and the way of the
Great Mother. Miseces prejin.

Mapes takes a step backward to flee.

JESSICA (CONT'D)
I know many things. I know you came
prepared for violence with a weapon in
your bodice.
--
MAPES
My lady, I... the weapon was sent as a
gift if you should prove to be the one.

JESSICA
And the means of my death should I prove
otherwise.
(inner voice)
Now we will see which way the decision
tips.

Slowly Mapes reaches into her dress and brings out a
sheathed knife. She unleashes it.

MAPES
Do you know this my lady?

JESSICA
(inner voice)
It could only be one thing....
(out loud)
It's a crysknife.

MAPES
Say it not lightly...
(very slowly)
Do you know its meaning?

JESSICA
(inner voice)
Here is why this Fremen has taken service
with me, to ask that one question. Delay
is as dangerous as the wrong answer.
Shadout is Chakobsa... knife, in Chakobsa
is... maker of death.
(out loud)
It's a maker...

Mapes SCREAMS with elation and grief.

JESSICA (CONT'D)
(inner voice)
Maker?... Maker is the key word... the
tooth of the worm? That was close...
(out loud)
Did you think that I, knowing the
mysteries of the Great Mother, would not
know the maker?

MAPES
My lady, when one has lived with prophecy
for so long, the moment of revelation is a
shock.

Mapes sheathes the blade... slowly
--
JESSICA
(inner voice)
There's more here... yes!
(out loud)
Mapes, you've sheathed that blade
unblooded.

With a GASP Mapes drops the knife into Jessica's
hands and opens her blouse.

MAPES
Take the water of my life!

Jessica withdraws the knife from the sheath and,
with the blade, scratches a line just above Mapes'
right breast.

MAPES (CONT'D)
You are ours.... You are the one.

Jessica's eyes stare ahead. She knows these words
ring with truth.

93.  INT. TUNNEL - OBSERVATION ROOM - ARRAKEEN PALACE -
DAY

The Duke, Paul and SEVERAL ARMED GUARDS enter a
tunnel to a `thopter landing pad which is
illuminated by a shaft of light coming from a
chimney-like exit above. DR. KYNES and his Fremen
guard are standing next to Gurney.

KYNES
(to Gurney)
So, this is Leto the Just...

GURNEY
(sharply)
I hope I made myself clear. You may call
him "The Duke," "My lord," or "Sire." And
there is a more ancient term you might
keep in mind -- "Noble Born."

KYNES
(inner voice)
Play out your little comedy while you can
off-worlders...

Gurney turns and activates a device...

93A. INSERT - ORNITHOPTER OPENING

...which causes the ornithopter behind to fold open
ready for flight.
--
93B. INT. TUNNEL - OBSERVATION ROOM - ARRAKEEN PALACE -
DAY

The two parties meet and are introduced.

DUKE LETO
So you are Dr. Kynes, the Imperial
Ecologist?

KYNES
(turning to Gurney)
I prefer the more ancient term,
planetologist... Noble Born.

DUKE LETO
This is my son, Paul.

PAUL
Are you a Fremen?

KYNES
I am a servant of the His Majesty the
Emperor. I have served His Majesty on
Arrakis long enough for my eyes to change.

PAUL
(inner voice)
He's hiding something.

DUKE LETO
I understand we have you to thank for
these stillsuits, Doctor.

KYNES
They are Fremen suits. I hope they fit
well, my lord.

PAUL
"Your gift is a blessing of the river."

Kynes' FREMEN GUARDS, hearing this are siezed with
agitation. Kynes QUIETS them, then studies Paul.

KYNES
(inner voice)
The Mahdi will greet you with holy words
and your gifts will be a blessing.
(spoken, nonchalantly)
Most of the desert natives here are a
superstitious lot. They mean no harm. With
your permission, I will check the security
of your suits.

Gurney and the guard move forward warily.

GURNEY
(angrily)
The Duke is to be addresses as...
--
Kynes comes forward and adjusts the Duke's suit,
checking seals and pulling on straps.

KYNES
Basically...

GURNEY
(leaping forward to protect his Duke)
Sire!

DUKE LETO
It's all right Gurney.

Gurney steps back.

GURNEY
Yes, Sire.

KYNES
It's a high-efficiency filter and heat
exchange system. Perspiration passes
through the first layer and is gathered in
the second. The salt is separated.
Breathing and walking provide the pumping
action. The reclaimed water circulates to
catchpockets from which you can drink
through this tube at your neck. Urine and
feces are processed in the thigh pads.
Should you be in the open desert, remember
to breathe in through your mouth, out
through the nose tubes.

The Duke is now properly fitted. Kynes places the
noseplug into his nose.

KYNES (CONT'D)
With a Fremen suit in good working order,
one can sustain life for weeks, even in
the deep desert.

He removes the noseplug.

DUKE LETO
My thanks.

KYNES
With your permission...

Kynes turns to Paul, running his hands over the
slick fabric. He stands back with a puzzled
expression.
--
KYNES
You've worn a stillsuit before?

PAUL
No.

KYNES
Your suit is fitted desert fashion. Who told you how
to do that?

PAUL
No one. It... seemed the proper way.

KYNES
That it is.
(inner voice)
He shall know your ways as if born to
them.

Kyne's Fremen guard are watching Paul very closely
now.

GURNEY
We're wasting time, Sire.

Duke Leto, Dr. Kynes, Gurney and Paul enter the
ornithopter...

88. Through 89B.    (Deleted)

90.  INT. JESSICA'S CHAMBER - ARRAKEEN PALACE - DAY

Jessica trembles.

JESSICA
(inner voice)
I must speak with you Leto!

91. Through 92.          (Deleted)

93C. EXT. ATREIDES ORNITHOPTER - TUNNEL - ARRAKEEN PALACE
- DAY

...and the thopter turns slowly as it goes up into
the light.

93D. (Deleted)
--
93E. EXT. ATREIDES ORNITHOPTER - DAY

From outside the Palace's atomic shield we see the
blur of the ornithopter pass through a porthole and
come out perfect like a gleaming jewel.

93F. Through 94.    (Deleted)

94A. INT. ATREIDES ORNITHOPTER - DAY

KYNES
Southeast over the Shield Wall. That's
where I told your sandmaster to
concentrate his harvesting.

95.  EXT. ATREIDES ORNITHOPTER - DAY

They crest the top of the wall which opens out into
a black, level expanse of rock, cratered and
fractured. On the other side is the huge, seemingly
endless plain of sand, the Great Desert. In the hazy
distance, flashes of light can be seen.

96.  INT. ATREIDES ORNITHOPTER - DAY

PAUL
Will we see a worm?

KYNES
Where there is spice and spice mining
there are always worms.

PAUL
Always?

KYNES
Always.

PAUL
Why do they come?

KYNES
To protect their territory. Vibrations
attract them.
--
PAUL
(inner voice)
I've registered him now... a knife is a
sheath on his left arm... He's strong... a
person born to command... He's hiding many
things.
(out loud, suddenly)
Is there a relationship between the worms
and the spice?

Kynes turns instantly and stares at Paul. Gurney
sees the wonder in Kynes' eyes.

GURNEY
The young master is a trained Mentat, an
advanced student of Prana Bindu has
studied under some of the finest teachers
in the Universe.

Kynes takes a second look at young Paul.

KYNES
As I said... they defend the spice sands.
As to their relationship with the spice...
who knows.

97. Through 97A.    (Deleted)

98.  INT. ATREIDES ORNITHOPTER - DAY

GURNEY
Dust cloud ahead, Sire.

KYNES
That's it... spice mining... no other
cloud quite like it. See the spotters over
it? They're watching for wormsign... the
telltale sand waves. Seismic probes on the
surface, too Sire... worms can travel too
deep for their waves to show... Looks like
a good patch of spice.

DUKE LETO
Wormsign? Is it wormsign?
--
KYNES
Yes!... worm. Big one! You've got sharp
eyes Sire.... May I?

Kynes grabs the microphone and dials in the correct
frequency.

98A. through 99.    (Deleted)

100. INT. ATREIDES ORNITHOPTER

From the window, we see that the sand below is
rippling, like water with a big fish just under the
surface.

KYNES
(into radio, after having found the
frequency)
Calling Harvester Pad Nine. Wormsign!

STATIC... then a voice.

VOICE
(over radio)
Who calls Pad Nine?

GURNEY
(quickly)
Don't mention the Duke... This is an
uncoded channel.

KYNES
Unlisted flight northeast of you...
wormsign on intercept course... estimated
contact fifteen minutes.

VOICE
(over radio)
Have sighting confirmed. Stand by for fix.
Contact in sixteen minutes minus. Very
precise estimate. Who is on that unlisted
flight?

Kynes clicks off the radio.

DUKE LETO
What happens now?

KYNES
The carryall will come and lift off the
spice harvester. Try and get in close over
the harvester... you'll find this
interesting Sire.
--
The Duke accelerates the ornithopter in the
direction of the harvester. Paul can SEE...

101. EXT. HARVESTER - DESERT - DAY

...huge amounts of sand being spewn out of the
gigantic stack atop the metal and plasteel
harvester.

102. INT. ATREIDES ORNITHOPTER - DAY

KYNES
They'll work until the very last minute.

The yellow cloud of the harvester envelops them. The
Duke flies up to get a closer look.

VOICE
(over radio)
Spotter control... no sign of the
carryall... it isn't answering.

Everyone looks at one another.

GURNEY
The worm is eight minutes away, Sire.

VOICE
(over radio)
Spotter control -- give me a report by the
numbers.

Over the radio MANY VOICES report they have no
contact with the carryall.

DUKE LETO
Damn it... Harkonnens.

He punches a control button and grabs a microphone.

DUKE LETO (CONT'D)
(into microphone)
We are coming down to take you off the
harvester... All spotters are ordered to
comply.

VOICE
(over radio)
Ordered by whom?
--
DUKE LETO
(angrily)
Duke Leto Atreides....

Gurney and Paul turn to each other, worried.

VOICE
(over radio)
Yes... yes, Sire!

DUKE LETO
How many men do you have?

VOICE
(over radio)
Full crew -- twenty-six men -- but Sire,
we can't leave this spice...

DUKE LETO
Damn the spice! Get out of there.

103. EXT. HARVESTER - DESERT - DAY

All the spotters begin landing and the Duke descends
directly in front of the harvester which has stopped
mining yet emits a tremendous rythmic GRINDING
noise. No one is coming out.

104. INT./EXT. ATREIDES ORNITHOPTER/DESERT - DAY

Gurney nervously scans the sky for enemy ships. A
very low, powerful SOUND starts now and the ground
begins to shake.

105. EXT. HARVESTER - DESERT - DAY

A hatch opens and MEN come pouring out.

106. INT. ATREIDES ORNITHOPTER - DESERT - DAY

DUKE LETO
(yelling at the men)
Two men in each of the spotters... You!...
over here... run!!

The ground is really shaking now.  A tremendous low
THUNDERING sound grows along with a high rasping
HISS.

KYNES
(to Paul and Gurney -- yelling over
the noise)
I can't see him yet but he's very close...
--
DUKE LETO
(out loud to himself as he watches
the men scrambling)
Damn sloppy -- really damn sloppy.

FOUR MEN begin tumbling into the Duke's machine.

GURNEY
Come on boys... come on.
(Then, to the Duke)
We're going to be heavy, Sire.

The men press on Gurney and Paul.  Paul can feel the
fear. The sound is a horrible ROAR and deeper
RUMBLING now and the `thopter is vibrating and
shaking violently.  The air suddenly begins to SPARK
with static electricity.

KYNES
(nervous)
Here he is... We've got to go.

The Duke closes the doorways, surveys the area one
last time, then takes the controls.

106A.     INT. ATREIDES ORNITHOPTER - DAY

The ship strains and lifts off -- slowly.

Paul sees the brown powder clumped on the suits of
the men... their bluish eyes.  He smells the spice.
He begins to feel its affect.

PAUL
(inner voice as a blinding light
comes and goes)
Spice!... pure un-refined spice!

KYNES
(murmuring)
Bless the Maker and his water... Bless the
coming and going of him.  May his passage
cleanse the world.

DUKE LETO
(yelling)
What's that you're saying?

KYNES
Nothing.

A spice miner turns and sees Kynes, who remains
silent.
--
SPICE MINER #1
(astonished)
Liet!

SPICE MINER #2
Shhhhh.

Paul hears this, then looks to Kynes -- locks on his
image.

PAUL
(inner voice)
Liet?

KYNES
(pointing down and yelling)
You are about to witness something few
have seen -- watch!  Watch!

Paul looks down as the Duke banks over the
harvester.

107. EXT. HARVESTER - DESERT - DAY

Static electricity is IGNITING in the air and the sand is
swirling around the harvester.  Then they see it.  A wide
hole emerges from the sand, glistening spokes within it.
The hole is twice the size of the harvester.  Suddenly
the machine turns and slides into the hole, parts of it
EXPLODING.  The SOUND is deafening.  The Duke's ship is
WHINING to stay aloft.

108. INT. ATREIDES ORNITHOPTER - DAY

GURNEY
Gods, what a monster.

DUKE LETO
Someone is going to pay for this... I
promise.

KYNES
(inner voice -- as he studies the
Duke)
This Duke is more concerned over his men
than the spice!  I must admit... against
all better judgement... I like this Duke.

FADE TO:

109. through 113B.  (Deleted)
--
114. INT. OBSERVATION ROOM - ARRAKEEN PALACE - NIGHT

Duke Leto walks into the room.  The NIGHT GUARD
comes to attention as he passes.  DUNCAN IDAHO,
wearing a dark, dusty stillsuit, emerges from the
shadows.  DUKE LETO and DUNCAN meet at the foot of
the steps.  The men embrace and separate.

DUKE LETO
(happily)
Duncan!  What have you discovered about
the Fremen, Duncan -- tell me.  Why
haven't we heard from you?

DUNCAN
My lord... I suspect so much.  I think
they are the allies we seek... they are
strong and fierce... they do not give
their loyalty easily or quickly....  As
you know, the Imperium has never been able
to take a census of the Fremen.  Everyone
thinks that there are but few -- wandering
here and there in the desert.... My lord,
I suspect an incredible secret has been
kept on this planet... that the Fremen
exist in vast numbers... vast numbers...
and it is they that control Arrakis.

115. through 116.   (Deleted)

116A.     NEW SCENE - SHADOUT MAPES ALONG PASSAGE

117. INT. PAUL'S SUB-BASEMENT ROOM - ARRAKEEN PALACE -
NIGHT

DUKE LETO'S VOICE
Guard.  Open the door.

Paul is in a fitful sleep.  Leto enters and smiles
at his son.

DUKE LETO
Sleep well... my son.

The Duke smiles at Paul then leaves the room, but
after he goes, Paul strains with all his might to
lift himself to call out.

PAUL
(struggling painfully)
Father!... father... drugged...
--
122. INT. BARON'S QUARTERS - HARKONNEN SHIP - NIGHT

The BARON's face --  expressionless.  The SOUND of
his ship screams in the background.  The DOCTOR is
seated beside him.

118  INT. SUB-BASEMENT PASSAGEWAY - ARRAKEEN PALACE -
NIGHT

The Duke walks down the steps to a very narrow
passageway.  The passageway becomes very dark.

Suddenly the Duke hears a strange MEWLING sound.  He
turns down an even darker passageway.  He can hear
the shield WHINING in the distance.  He almost has
to feel his way.  Up ahead he sees a shape.  He
bends down and sees the SHADOUT MAPES dying on the
cold stone floor in the darkness.  She tries to
speak but cannot.  She falls.  Suddenly the Duke
HEARS the shield generator start whining down.

DUKE LETO
What happened?  What?
(as Mapes dies)
The shield!

The Duke reaches to activate his shield be a large
dart is shot into his shoulder.  The Duke lurches
upwards then tumbles to the ground.  Out of the
darkness comes Dr. Yueh.  The dart drops and
CLATTERS as if a dream.

DUKE LETO (CONT'D)
(mind racing -- struggling)
Yueh!
(inner voice)
He's sabotaged the house generators, we're
wide open.

YUEH
(with self-disgust)
I've brought House Atreides down.  I've
destroyed the new army's weirding modules.

DUKE LETO
(hoarse whisper)
... Why?

The generator WHINES lower and lower
--
YUEH
I wish to kill a man... not you, my dear
Duke, but the Baron....  You were dead
already... but you will be close to the
Baron before you die.  You will be tied
and drugged but you can still attack.
When you see the Baron you will have a new
poison tooth.  He will want you close so
he can gloat over you.  One bite on this
tooth and a strong exile...

DUKE LETO
Refuse...

YUEH
No! -- You mustn't... for in return I will
save the lives of your Paul and Jessica.

Yueh removes the Duke's signet ring and shows it to
him.

YUEH (CONT'D)
For Paul...

He implants the tooth.

Yueh becomes more and more blurred.  His image
begins to fade.  His lips move in the darkness.  The
generator WHINE is low and going lower and lower.

YUEH (CONT'D)
When you see the Baron, remember the
tooth!  The tooth!

119. (Deleted)

119A.     INT. COMMUNICATIONS ROOM - ARRAKEEN PALACE -
NIGHT

ATREIDES GUARD #1 comes running down the steps and
up to the CAPTAIN and a TECHNICIAN.

ATREIDES GUARD #1
The shield is down!  The shield is down!

ATREIDES GUARD CAPTAIN
Harkonnen...
(turns and shouts)
Get that shield up!
--
119B.     EXT. LANDING FIELD - ARRAKEEN - NIGHT

A warning TONE begins.  TROOPS begin pouring onto
the field.

119C.     EXT. ROCK - LANDING FIELD - ARRAKEEN - NIGHT

Troops race toward their ships.

119D.     (Deleted)

119E.     INT. GUARD HOUSE - ARRAKEEN PALACE - NIGHT

ATREIDES GUARD
The shield!  The shield!

120. INT. PASSAGEWAY - ARRAKEEN PALACE - NIGHT

A loud warning TONE vibrates.  Thufir turns away
from the doorway of a small room where he's
horrified to SEE...

120A.     INSERT

... a chemical FIRE consuming the thousands of
Atreides weirding modules.

121. through 121A.  (Deleted)

123. EXT. PALACE - ARRAKEEN - NIGHT

A thousand Harkonnen ships dive over Arrakeen and
the Palace.  Giant deep thunderous EXPLOSIONS
shatter the land.  Billowing SMOKE clouds column
upwards, forming a black wriggling death curtain
around the Palace.

124. INT. PASSAGEWAY - ARRAKEEN PALACE - NIGHT

Troops are running through the passageway, right and
left.  SMOKE is everywhere and the horrible SOUNDS
of the explosions continue.  The SOUNDS of stone
crunching, shifting, and breaking.  SCREAMS.  A wall
of stone suddenly cracks open.  A burst of air and
dust shoots out, HISSING.  The Duke's dog runs
through the passageway WHINING with fear.
--
125. (Deleted)

125A.     EXT. HARKONNEN SHIP - LANDING FIELD - ARRAKEEN
- NIGHT

Sardaukar rush out of a Harkonnen ship.  Their
electrically distorted faces come screaming toward
us.

125B.     (Deleted)

126. EXT. LANDING FIELD - ARRAKEEN - NIGHT

Harkonnen hammer ships thunder the ground, sending
cracks and fissures throughout the landing field.
Harkonnen scare SIRENS scream.

126A.     EXT. HAMMER SHIPS - ARRAKEEN - NIGHT

Atreides soldiers run from the hammer ships.

129. EXT. GROUNDS - ARRAKEEN PALACE - NIGHT

FIRE and SMOKE.  SCREAMS.  An ATREIDES SOLDIER's
head is hit with a large white hot piece of
explosion.  Through the black smoke, large SARDAUKAR
chase after THREE SOLDIERS and them with hydraulic
knife-guns.  One blade enters the back of one man's
head and comes out his nose.  Tremendous NOISE of
battle.  Gurney and a squad of TROOPERS climb
through bodies and thick smoke.  Gurney has the
Duke's dog safely inside his coat.  The little dog's
head sticks out -- looking about.  Gurney strokes
the dog's neck when the reach safety behind some
rock.  Small glimpses, as the smoke moves this way
or that, let them see thousands of Sardaukar
fighting.

GURNEY
LONG LIVE DUKE LETO!

TROOPERS
Long live Duke Leto!

The CRY from the men rings out as they attack with
frenzy equalling that of the Sardaukar.

127. INT. AUTOPSY ROOM - ARRAKEEN PALACE - NIGHT

The distant HAMMERING of the Harkonnen hammer ship.
Jessica's eyes open and she sees two big boots but
they seem to be floating above the stone floor she
is lying on.  She is gagged and tied.  She looks up.
She sees the huge Baron Harkonnen staring down at
her.  In the distance she HEARS the battle raging.
--
BARON
The drug was timed.  Dr. Yueh has been
very valuable to us....  What a pity you
must remain gagged.  We can't let
ourselves be swayed by your witch's Voice,
now, can we?

JESSICA
(inner voice)
Leto... where are you?

86.  INT. A ROOM - ARRAKEEN PALACE - DAY

Dr. Yueh covers his face with his hands in a
darkened room... sobbing.

127. BACK TO SCENE

The Baron floats across the room with suspensor-
borne lightness.

BARON
Goodbye, Jessica and goodbye to your sweet
son....  I want to spit once on your
head... just some spittle on your face --
what a luxury.

He spits on her cheek.  The Baron floats out of the
room into the passageway.

BARON (CONT'D)
We were ordered to kill them... so kill
them.

129. BACK TO SCENE - BATTLE

127. BACK TO SCENE

NEFUD
What are your orders, Piter?

PITER
Take them to the desert, as the traitor
suggested and worms will destroy the
evidence.  Their bodies must never be
found.
--
129. BACK TO SCENE - BATTLE

127. BACK TO SCENE

PITER
(whispering to Jessica, rubbing the
spittle around on her face with his
hand, delicately)
I'd thought of many pleasures with you.
It is perhaps better that you die in the
innards of a worm.  Desire clouds my
reason....  That is not good... that is
bad.

129. BACK TO SCENE

128. INT. SUB-BASEMENT PASSAGEWAY - ARRAKEEN PALACE -
NIGHT - SHIELD
EFFECT

Duncan Idaho kills a Sardaukar soldier and rushes
forward frantically.  His eyes blaze intensely.  He
yells out to the other Atreides soldiers.

DUNCAN
They're on this floor somewhere....

The soldiers disappear, searching in another
direction.  Duncan runs, pounding, down the
passageway -- his eyes searching in every doorway.
Suddenly twelve huge Sardaukar round a corner on a
quick march.  Duncan turns his shield up and charges
them.  Behind them he sees Paul and Jessica bound in
straps and being carried.

Duncan attacks and fights valiantly but he is
outnumbered.  In the fight the lights are blown out
and Duncan is killed by a slow stunner pellet
through the head.  Paul strains to help.

PAUL
(seeing Duncan)
Duncan!!  Duncan!!

Paul and Jessica are carried off, quickly, through
the darkness.  The battle SOUNDS thundering.
--
128A.     DUNCAN'S BODY - INT. SUB-BASEMENT PASSAGEWAY -
ARRAKEEN PALACE
- NIGHT - SHIELD EFFECT

Duncan's dead, shielded body slides sparking in the
dark against the passageway walls.

129. BACK TO SCENE - BATTLE - RABBAN ON BRIDGE

131C.     (Deleted)

132. EXT. PALACE - ARRAKEEN - NIGHT

FIRE and SMOKE.

133. INT. OBSERVATION ROOM - ARRAKEEN PALACE - NIGHT

The Baron's face, the light of FIRE and EXPLOSIONS
playing over it.  The Baron turns as Piter ushers in
the traitor Yueh.

BARON
(to Yueh - quietly)
You wish now to join your wife, is that
it, traitor?

A sudden flash of hope crosses Yueh's face.

YUEH
She lives?

The Baron smiles, almost sympathetically.

BARON
You wish to join her... join her, then.

Piter moves to Yueh, a knife glistening in his hand.
It flashes into his back.  A GASP escapes Yueh's
throat, a sad look passing over his face, as if to
say "I thought as much."  He stands stiffly, then
falls gasping.  He tastes his own blood, then dies.

BARON
Take him away.

144. EXT. GROUNDS - ARRAKEEN PALACE - NIGHT

Black smoke palms.
--
145. EXT. LANDING FIELD - ARRAKEEN PALACE - NIGHT

Rabban strides in front of his uncle's ship,
carrying Kynes over his shoulder.  Harkonnen and
Sardaukar SOLDIERS stand at attention.  Rabban tears
off Kynes' stillsuit. Kynes falls.

RABBAN
He was in the Palace with the Atreides...
I also say he was a spy for the Emperor.
(looking up to the troops)
Go now!  Take him to his desert to die.
Go!

129A.     EXT. HARKONNEN ORNITHOPTER - NIGHT

The small `thopter climbs toward the Shield Wall
through a SMOKEY atmosphere illuminated by distant
EXPLOSIONS.

130. INT. HARKONNEN ORNITHOPTER - NIGHT

JESSICA
(inner voice)
Yueh's sign.  He's left a satchell.

Jessica and Paul, bound by cabin straps, lie in the
back, the two guards at the controls.  Outside,
`thopters and ships fly past them toward the city.
The distant FIRES play over Jessica's face as she
sees Yueh's triangular tattoo scratched in the cabin
roof.

HARKONNEN GUARD #1
I'd like to have some fun before we kill
her.

HARKONNEN GUARD #2
(laughing)
Of course... what did you think?

Jessica looks to Paul.

PAUL
(struggling to use The Voice)
Don't touch my mother...

JESSICA
(inner voice)
Oh great mother!  He's trying the voice.
The Reverend Mother said it could save
him.

HARKONNEN GUARD #1
Did you hear a noise from the little one?
--
HARKONNEN GUARD #2
I didn't hear anything.

HARKONNEN GUARD #1
No?

HARKONNEN GUARD #2
No.

He turns and hits Paul in the shoulder with a
stungun.  Paul recovers and starts taking long,
calming breaths.

JESSICA
(inner voice)
The calming exercise.

HARKONNEN GUARD #1
The little one!
(they laugh)

Suddenly, Guard #1 reaches around and puts his hand
up Jessica's skirt.  He starts breathing hard.  Paul
clears his throat.

PAUL
(using The Voice)
Remove her gag!

JESSICA
(inner voice)
Excellent!

Guard #1 finds himself removing Jessica's gag.
Guard #2 turns away from his controls but seems
powerless to stop him.  Once, it's off Jessica
smiles seductively and writhes on the `thopter
floor.

JESSICA (CONT'D)
(The Voice)
There's no need to fight over me.

The two men stare at one another a moment.  Then
Guard #1's hand, glinting silver, flashes into Guard
#2's chest, killing him.  Guard #1 pulls the knife
out, smiling.  The ornithopter begins to veer off
into a dangerous nose dive.

HARKONNEN GUARD #1
Now?

JESSICA
(The Voice)
First cut my son's bonds.
--
Guard #1 slowly cuts Paul's big straps, never taking
his eyes off Jessica.  The ornithopter gets closer
and closer to the top jagged surface of the Shield
Wall.

JESSICA (CONT'D)
(The Voice)
That's it.

The blade cuts through the strap holding Paul's
legs.  Paul kicks upwards extremely powerfully and
his foot breaks through the man's chest cavity and
drives his heart up into his head, spewing blood out
the man's mouth.  Paul grabs the controls but it's
too late.  The ship falls into the rock.

130A.     EXT. HARKONNEN ORNITHOPTER - DESERT - NIGHT

The `thopter slides across the rock, shearing off a
wing.  Suddenly they are beyond the rock three miles
above the great desert and plummeting fast toward
the dunes below.

130. BACK TO SCENE

Paul pulls desperately on the controls and manages
to keep the ship aloft and flying into the deep
desert.

JESSICA
Oh, my God!

131. through 131A.  (Deleted)

131B.     EXT. PALACE - ARRAKEEN - NIGHT

CU violently burning palm.

133. BACK TO SCENE

Nefud exits - TWO HARKONNENS wheel in the stretcher,
and swing it round - one of the GUARDS hands Piter
his knife back - the Guards exit and the door closes
- Piter moves up to Duke Leto and leans over him
moving his knife across the Duke's face.

The Baron flies down to the stretcher.

BARON
Duke Leto Atreides.  Someone's torn the
insignia off your uniform.  Such
carelessness.

Leto shows no sign that he has heard.
--
PITER
It was Feyd.

Leto's POV:  The Baron and his Mentat are only DIM
FARAWAY SHAPES.  Their voices reach Leto as if
travelling across a greater distance.  The Baron
looks to Leto and then moves to him, looking him
over.

BARON
It was Feyd?
(laughing)
It was Feyd!  Where is the ducal signet
ring?  I must have his ring.

PITER
The ring?... he was brought to us as is,
Baron.  I...

BARON
You killed the doctor too soon, you fool!

DUKE LETO
(inner voice)
Yueh... Yueh... dead... Paul and Jessica
safe... the tooth!

PITER
He's coming round, my Lord.

The Baron moves from behind a table stacked with
dirty dishes and foodstuffs and goes to Leto.

DUKE LETO
(inner voice)
Wait... he must be near...

BARON
Where is your ring?

The Baron's face is now very close to Duke Leto's.

BARON (CONT'D)
You do not answer!

DUKE LETO
(very faint)
A... little... closer....  The... water...
of my life... for Paul.

The Baron briefly wonders at these words and then
turns to Piter.
--
BARON
He's crying!
(he hits Duke Leto)
He's crying!  He's crying, Piter.  What
does he mean?

Piter moves forward.  The Baron sees a suculent
piece of chicken skin on the table.  He picks up the
plate, then the chicken skin.

Leto's POV:  It's grown HAZY again.  The Baron is
beginning to move away, reaching for the small piece
of chicken skin.  Piter leans close to Leto.

DUKE LETO
Now!

We hear a CRUNCH, hear a tumultuous RUSHING SOUND as
Piter's face is pushed forcibly away.  The Baron is
turning, a dumbfounded look on his face.  He drops
the plate, and backs away.

There is a tremendous ROARING.  Bits of visions of
Caladan rush through Leto's ever-darkening
consciousness --

MENTAL IMAGES:

134. through 134A.  (Deleted)

134B.     EXT. CLIFF WALL - CALADAN - DAY

The Atreides banner, the green of it, then the
black.  The blackness flaps; then all fades to
SILENCE.

135. INT. HARKONNEN ORNITHOPTER - NIGHT

As they fly deeper into the desert with the ship
shuddering and straining, Jessica suddenly cries out
with tremendous premonition and fear.

JESSICA
Leto!  Leto!

Tears course down her cheeks as Paul turns to her.

JESSICA (CONT'D)
(to Paul)
Leto!  He's dead!  He's dead...
--
PAUL
I know
(inner voice)
I have NO FEELINGS!!  Why?

136. INT. OBSERVATION ROOM - ARRAKEEN PALACE - NIGHT

Duke Leto and Piter lie dead.

137. INT. ARRAKEEN PALACE - NIGHT

The Baron floats near the ceiling in a small
passageway.  He is ecstatic.

BARON
(screaming)
I'm alive!!!  I'm alive!!!

137A.     INT. HARKONNEN `THOPTER - NIGHT

Paul is fighting the controls of the Harkonnen
`thopter.

137B.     CLEAN POV

Harkonnen `thopter lights on dunes.

137A.     BACK TO SCENE

PAUL
I can't maintain any altitude... we'll
never reach the safety of rock.  Maybe
that small rock.

JESSICA
Where are we do you think?

PAUL
The South Polar regions... the forbidden
area.  We must make it to that rock...

137C.     EXT. HARKONNEN `THOPTER - DEEP DESERT - NIGHT

The `thopter violently hits the sands and flips up -
- almost turning over.  It falls slowly back,  then
slides down the side of a dune.
--
137D.     EXT. HARKONNEN ORNITHOPTER - DESERT - NIGHT

PAUL
Hurry!

He jumps out of his seat.

JESSICA
Bring these satchels!

She hands him one.

PAUL
(at doorway)
Hurry -- This crashing may bring a worm.

As Paul puts the satchel over his shoulder, he feels
something.  He looks at his father's ring.  He
stares at it silently, then closes his hand around
it.  They jump outside.

JESSICA
(starting to cry)
A million deaths are not enough for
Yueh...

PAUL
(inner voice)(reacting to his
mother's tears)
Where are my feelings... I feel for no
one...

138. EXT. ROCK - DESERT - NIGHT

Paul and Jessica running.  Paul pulls Jessica to a
place in the wall where a small overhang offers
shelter.  Jessica falls to the ground.  She CRIES,
pouring out her grief, but soon the sound of it is
carried away by the building rush of WIND.  Paul
turns and looks out to the open desert, this portion
of which is a dust ocean.

138A.     PAUL'S POV:

The Mouse Moon has risen.

Ripples of dust undulate tide-like in the light of
the moon.  The WHISPERING grains billow up like the
foam of waves as they hit the rock.

138. BACK TO SCENE

Paul turns, his face illuminated by the two moons
above.  His eyes lock on the moon which has the
image of the mouse.
--
PAUL
(inner voice)
The second moon... from the dreams...

138B.     INT. PAUL'S EYE - NIGHT

We move into Paul's eye, where the mouse moon appear
and revolves slowly.  The moon begins to explode.
The pieces of the moon soar toward us burning with
white-hot flames.  Within the flames we see...

139. (Deleted)

139A.     EXT. ARRAKEEN PALACE - NIGHT

... the burning Palace of Arrakeen.  We move closer
to it.

189B.     INT. OBSERVATION ROOM - ARRAKEEN PALACE - NIGHT

We then see Duke Leto's face.  The Baron leans over
the Duke and clutches the skin on the Duke's face.
He begins pulling it.  The skin on the Duke's race
slowly rips open -- making a hideous tearing SOUND.
Black SMOKE issues forth from the hole which teats
larger.

PAUL (V.O.)
(distorted)
House Atreides is ruined.
(less distorted)
This moon holds my past.

139C.     INT. VESTIBULE - OBSERVATION ROOM - NIGHT

Inside and through the SMOKE Paul sees Feyd tear the
Red Duke insignia off his father's uniform.  He sees
Feyd laughing.  The moving, now-brilliant red hawk
insignia becomes...

139D.     EXT. CASTLE CALADAN - NIGHT

... a burning meteor ROARING over the castle on
Caladan.  The meteor crashes in the black sea.

PAUL (V.O.)
This moon holds my future.
--
139E.     INT. WATER - NIGHT

Foaming confusion turning into a small, twisting
fetus under the sea.  Its eyes closed.  Moving close
to it, its eyes snap open.  Through the eyes is the
pale white face of JESSICA.

139F.     EXT. SHIELD WALL - DESERT - NIGHT

There is a huge soaring WIND sound and beyond
JESSICA the dunes roll like ocean waves.

139G.     EXT. MOUSE MOON - NIGHT

The moon continues to spew out pieces of moving
images which are seen then disappear as fast as
sparks.  The broken, burning pieces float eerily
toward us over the undulating dunes below.  One
image floats closer.  It is a hand folded into a
fist.

PAUL (V.O.)
I am only a seed...

The fist begins to open.

DUKE LETO (V.O.)
The seed must grow.

The hand opens fully with slow blue fluid pulsating
out the very center of the palm.  The hand floats
eerily forward.

DUKE LETO (V.O.)
The sleeper must awaken.

139H.     EXT. WATER - NIGHT

The last image which passes is foaming and spitting
dark blue water.  As the image passes, the black
smoke trailing behind it obscures the picture to
blackness.

140. EXT. ROCK - DESERT - NIGHT

Through the darkness we move to Paul's clenched
hand.  It opens, revealing the signet ring in the
very center of his palm.  Paul looks upward to the
moons of Arrakis.  He looks back to the ring, then
to his mother.

PAUL
Listen to me!... you wanted to know about
my dreams... and I've just had a waking
dream... do you know why?...
--
JESSICA
Calm yourself/

PAUL
The spice!  It's in everything here.  The
air, the soil, the food...  It's like the
Truthsayer drug.....  It's a poison!!!!
You knew the spice would change me.  But
thanks to your teachings it's changed my
consciousness.  I can see it... I can see
it.

JESSICA
(inner voice)
Is he....?

PAUL
You carry my unborn sister in your womb!

JESSICA
(inner voice)
He knows.

PAUL
You and your Bene Gesserit sisterhood...
I'm not your Kwisatz Haderach...  I'm
something different, something unexpected!
(inner voice)
I'm a seed.
(out load)
I am so much more...  You don't begin to
know me...

141. through 142A.  (Deleted)

142B.     EXT. ROCK - DESERT - NIGHT

Paul's head goes down.  He places the ring on his
finger.

PAUL
(inner voice)
Father... now I have become a killer and I
will continue to kill until I have avenged
your death.
(out loud)
Father!

Jessica cries as she stares at her son.

143. through 143A.  (Deleted)
--
145. BACK TO SCENE

Rabban stops up the ramp.  He wears a large smile.
His thick head sweats and sweat runs down his thick
neck.  He goes inside and the doors swing closed.

146. INT. HARKONNEN SHIP - NIGHT

He enters the ship and moves down within to the
Baron's headquarters, passing two dwarves cooking a
dead legless cow which hangs from chains.  Rabban
tears out the cow's tongue and eats it.  Then he
exits through a door which closes behind him.

147. INT. BARON'S QUARTERS - HARKONNEN SHIP - NIGHT

The Baron is flying wildly, circling the outside of
a large steel shower, while Nefud and a DWARF play a
strange instrument producing maniacal, perverse,
screaming MUSIC.  The Baron SEES Rabban enter, but
continues to fly around the shower.

BARON
(very excited)
Rabban!!... we're knee deep in Atreides
blood!  We've gutted them.  We've gutted
them!
(laughs)

The Baron floats to Rabban and begins lovingly
massaging Rabban's massive neck as he speaks to him.

BARON
Rabban, Rabban...  I place you in charge
of Arrakis.  It's yours to squeeze, as I
promised.  I want you to squeeze and
squeeze and squeeze.
(massaging in rhythm)
Give me spice!  Drive them into utter
submission.  You must not show the
slightest pity or mercy... as only you
can...  Never stop!
(releasing him)
Go....  Show no mercy!

RABBAN
Yes, my lord Baron.

Rabban leaves just as Feyd steps out of the shower.
The Baron turns to him lovingly.
--
BARON
(to Feyd)
And when we've crushed these people enough
I'll send in you Feyd... they'll cheer you
as a rescuer... lovely Feyd... really a
lovely boy.
(suddenly he smiles and screams)
Where's my doctor?

148. INT. HARKONNEN SHIP - NIGHT

As Rabban leaves, he looks into one room of the
ship.  Behind the glass porthole sits Thufir Hawat
bound head and foot, his eyes darting this way and
that.

148A.     EXT. ROCK - DESERT - NIGHT

Paul and Jessica are in stillsuits.  Paul is looking
through a Fremkit.  He finds a paper with Dr. Yueh's
mark on it.

PAUL
(inner voice)
Yueh's left the plans for the weirding
modules.

148B.     EXT. MOONS - ARRAKEEN - DESERT - NIGHT

The moons have moved further across the sky.

148A.     BACK TO SCENE

Suddenly Paul turns and studies his mother.  A
stronger WIND comes up.

PAUL
We have to get to that mountain of rock.
We have entered the time when all will
turn against us and seek our lives...

Jessica gets up.  They make their way up the crest
of a dune by a small rock.

PAUL (CONT'D)
It's further than I thought... a worm is
sure to come....  I'll plant a thumper,
that should divert it.
--
Paul moves off into the shadows.  Suddenly, Jessica
SEES a burst of LIGHTNING illuminate the mountain of
rock in the distant and the vast dunes before them.

JESSICA (CONT'D)
(inner voice)(as Paul leaves to light
the thumper)
...the night is a tunnel... a hole into
tomorrow... if we're to have a tomorrow...

149. through 151.   (Deleted)

151A.     EXT. DEEP DESERT - NIGHT

Paul plants the thumper which begins a powerful
rhythmic noise.  He turns to Jessica.

PAUL
(returning)
Remember... walk without rhythm and we
won't attract a worm... it'll go to the
thumper.

JESSICA
(puts in her noseplug)
I'm ready.

Paul and Jessica move into camera and exit right.

151B.     EXT. DEEP DESERT AND ROCKS - NIGHT

Another burst of LIGHTNING.  The distant rock seems
to have grown no larger.  Their muscles begin to
ache.  Suddenly they HEAR the thumper start behind
them.

PAUL
Keep going...

152. EXT. DEEP DESERT AND ROCKS - NIGHT (LATER)

Their breathing becomes very labored.  The sand
moves like slow water, forever rolling down and up.
Then they hear the worm, the low thundering HISS
shaking the tonnage of sand.  The thumper stops.
Paul turns.

PAUL
Faster!!
--
JESSICA
(screaming)
It's deafening!

Their bodies ache and they feel like dropping, yet
the cliff is still a good distance away.  The worm
SOUND grows louder and Paul turns to look.

153. EXT. WORM - DESERT - NIGHT

A flash of LIGHTNING.  The worm is now coming toward
them.  The mound of sand over the worm is enormous
and is approaching at a terrifyingly fast speed.
The power of this worm is awesome.

153A.     EXT. DEEP DESERT - NIGHT

PAUL
(screaming)
Run!

JESSICA
I can't... I can't.

She turns to see.  Then she runs.

153B.     EXT. DRUM SAND - DEEP DESERT - NIGHT

All at once their feet tromp down on firmer sand.
The SOUND is very loud.

PAUL
Drum sand!

The DRUMMING sound ECHOES deep within the ground.
Jessica falls.  Paul stops and drags her up.  They
run again.  The worm SOUND becomes unbearably loud.
Static electricity SPARKS giant bolts of pure white
LIGHTNING and the air turns to ozone.  Finally they
find rock.  Behind them the SOUND of the worm
changes.  They turn.

154. EXT. WORM - DEEP DESERT - NIGHT

The gigantic head of the worm is just breaking
through the sand.  The mouth begins to open in an
eighty-foot circle of teeth and darkness.  The mouth
arches forward searching for them.

155. EXT. BASE OF THE CLIFF - DEEP DESERT - NIGHT

Paul and Jessica climb up and up inside a narrow
slit of rock.
--
155A.     INT. ROCK CLIFF - DESERT - NIGHT

The worm's mouth climbs higher also but it cannot
penetrate the narrow opening in the rock.

156. EXT. ROCK CLIFF - NIGHT

Paul and Jessica have scrambled upwards a couple of
hundred feet.

156A.     EXT. WORM AND ROCK - NIGHT

Still the worm stretches up to them.  Suddenly the
worm begins BANGING on the rock.  Huge SHUDDERS
drive through the black stone.  Over and over again
the worm mindlessly hits at the rock.

156B.     EXT. ROCK CLIFF - NIGHT

Paul and Jessica crouch further back in the tiny
passageway of safety, but a solid back wall of rock
prevents them from moving back any more.

156C.     INT. ROCK CLIFF - NIGHT

The breath from the worm is like a hurricane of
WIND.

PAUL
(inner voice)
Cinnamon... the spice!
(out loud)
Do you smell it?

JESSICA
Yes...

PAUL
(inner voice)
I know the secret.  The worm is the
spice... the spice is the worm.

157. (Deleted)

157A.     EXT. ROCK CLIFF - DEEP DESERT - NIGHT

Suddenly a colossal section of the rock wall cracks
and topples off into the worm's mouth.  Instantly
the worm pulls back.  A huge FIRE roars deep within
the worm consuming the rock.
--
158. INT. ROCK CLIFF - DEEP DESERT - NIGHT

The worm now can get even closer to Paul and
Jessica.  It looms up again and crushes its mouth up
against the rock.

158A.     EXT. ROCK CLIFF - DEEP DESERT - NIGHT

Another fissure opens, and suddenly half the rock
wall protecting them splits off entirely and
falls... taking Paul with it.

158B.     EXT. WORM AND ROCK - NIGHT

...against the worm.

159. EXT. ROCK CLIFF - DEEP DESERT - NIGHT

Paul is knocked off the cliff and falls straight
down two hundred feet.  His feet skid along the face
of rock.  He bounces and brakes.  He hits and jumps.
He careens from one boulder, flies upside down,
rights himself then tumbles and skids into the sand.
Unhurt, he jumps up and scrambles up another part of
the rock to safety.

160. EXT. ROCK CLIFF - DEEP DESERT - NIGHT

JESSICA
Paul!

She presses against the narrow ledge that is left
after the worm assault.

161. EXT. BASE OF THE CLIFF - DEEP DESERT - NIGHT

The worm is just coming up again when distant
THUMPING is heard.  The worm, as if charmed by the
sound, turns and moves off towards it.

PAUL
(inner voice)
A thumper.

161A.     (Deleted)

162. EXT. ROCK CLIFF - DEEP DESERT - NIGHT

Jessica climbs further up and manages to get over to
a place where she can meet up with Paul, who is now
climbing back.
--
JESSICA
(crying)
What's happened?...  Why did it leave?

PAUL
(breathing heavily)
Someone started another thumper....  We're
not alone.

They climb upwards until the ledge ends at the mouth
of a dark crevice.  Paul and Jessica try to see into
the inky black hole.

163. EXT. CREVICE - DEEP DESERT - NIGHT

Slowly Paul and Jessica enter, inching forward.  A
low moan of WIND comes up.  Paul can see nothing,
then suddenly he SEES stars above and SEES the hint
of stairs cut into the rock.

JESSICA
(whispering)
Man-carved steps.

PAUL
(whispering)
Yes...

They climb the steps and enter an extremely narrow
dark channel of stone.  As they make their way
through the rock, suddenly there is a burst of
lightning which illuminates a whole troop of Fremen
standing silently in front of them.

164. EXT. FREMEN PLACE - DEEP DESERT - NIGHT

STILGAR
Perhaps these are the ones Mapes told us
of.

STILGAR
(to Jessica)
Are you trained in the ways of the desert?

JESSICA
No, but many consider my training
valuable.

STILGAR
I will take the boy-man... he shall have
sanctuary in my tribe...
--
A LOW NOTE on a dip stick is blown by one of the
Fremen tribe.  Jessica shifts, Paul sees it, and
just as Stilgar begins a reach for his weapon,
Jessica turns, slashes out, utters a SOUND, whirls
again and with rock behind her holds Stilgar
helpless in front of her -- her hand at his throat.
Paul moves on her first move.  He races up a rocky
incline.

165. EXT. CLIFF - FREMEN PLACE - DEEP DESERT - NIGHT

He then jumps higher up and presses himself between
two rocks on a low cliff overlooking the rest of the
Fremen troop.

166. EXT. FREMEN PLACE - DEEP DESERT - NIGHT

The troop starts shooting projectile weapons in
Paul's direction.

STILGAR
Stop!  Get back!!  She has the weirding
way.  Why didn't you tell us!  Great
gods... if you can do this to the
strongest of us you're worth ten times
your weight of water.  As a leader of my
people I give you my bond: teach us this
weirding way and you both shall have
sanctuary.  Your water shall mingle with
our water.

JESSICA
Then I will teach you our way of
battle....  you have the word bond of a
Bene Gesserit.

A FREMEN
It is the legend.

167. EXT. CLIFF - FREMEN PLACE - DEEP DESERT - NIGHT

Up on the rock, Paul turns.  He takes a step, then
notices a small figure standing in front of him.  It
is a girl.

CHANI
I am Chani, daughter of Liet....  I would
not have permitted you to harm my tribe.

PAUL
(inner voice)
From my dream... so beautiful.  Liet....
is this Kynes' daughter?

Paul stares at her in wonder.
--
CHANI
Come with me.  I'll show you an easier way
down.

They exit.

168. EXT. FREMEN PLACE - DEEP DESERT - NIGHT

STILGAR
(to Paul, as they meet)
You have strength... real strength... You
shall be known as Usul, which is the
strength of the base of the pillar.  This
is your secret name in our troop.  But you
must choose the name of manhood which we
will call you openly.

PAUL
(thinking)
What do you call the mouse shadow in the
second moon?

STILGAR
We call that one Muad'dib.

PAUL
Could I be known as Paul Muad'dib?

STILGAR
You are Paul Muad'dib, and your mother
shall be a Sayyadina among us....  We
welcome you.

Wind blows a cloud of dust through the rock.  High
above the moon with the mouse shadow glows
brilliantly.  It dissolves into the sun.

168A.     EXT. DEEP DESERT - DAY

Paul, Jessica and the Fremen march through the
dunes.

171. through 171B.  (Deleted)

172. EXT. DEEP DESERT - DUSK/SUNSET

HEAT WAVES and sand dunes.  Mysterious SOUNDS echo
in the distance as the giant sun is setting.

Chani takes Paul to the top of a dune.  They stare
at the sunset and a huge rock outcropping in the
distance.
--
CHANI
Seitch Tabr.

Paul looks at the rock, then turns to her.

CHANI (CONT'D)
Tell me of your homeworld, Usul.

These words rend Paul's soul.  He cannot speak.  He
reaches out and touches her hand - her cheek.

173. (Deleted)

174. INT. ENTRANCE - SIETCH TABR - NIGHT

The Fremen troop enters into a large square room
with slot passageways going off in various
directions.

175. INT. PASSAGEWAY - SIETCH TABR - NIGHT

They all move down one of the passageways which are
beautifully but very plainly cut with lasguns.  They
are like passages in the pyramids, dark with sharp
turns and inclines upwards or downwards, some very
steep and long, and others descending hundreds of
feet.  There is a strong, moaning WIND.

176. through 177.   (Deleted)

178. INT. PASSAGEWAY/STAIRS - SIETCH TABR - NIGHT

A quiet WIND can be heard -- deep and moaning.

JESSICA
Moisture...

She looks at Paul.  He, too, notices.

PAUL
Wind traps... huge ones.

Down a long, sloping, narrow passageway they go
until they reach a stairway cut into the stone.  It
is very dark and gets increasingly darker as they
descend.  The WIND sound grows.  The air grows
colder and damper.  Paul and Jessica share another
questioning look.  At the bottom of the stairs they
pass through a narrow slot doorway which suddenly
opens out on something so totally unexpected it
shocks Paul.
--
179. INT. RESERVOIR  -SIETCH TABR - NIGHT

It is enormous, deep reservoir of black water
sitting silently in the depths of this sietch and
stretching out into the darkness.

PAUL
(inner voice)
Water on Arrakis!!!
I have seen this place in a dream.
(out loud)
A treasure.

STILGAR
Greater than treasure, Usul.  We have
thousands of such caches.  Only a few of
us know them all.  When we have enough...
we shall change the face of Arrakis.
Listen!...

There is the sound of water dripping.  The lights
are extinguished - reflections play on Paul's face.

STILGAR (CONT'D)
The Rocks of Arrakis hold many secrets.

179A. through 180   (Deleted)

180A.     REVISED SCENE - HALL OF RITES

Thousands of Fremen wait below.  Paul enters a rock
ledge, guided by two monks, which is crowded with
Fremen and old Fremen Monks.  Below the crowds
continue to watch and wait while a giant wind organ
moans.  A Monk steps up to Paul.

MONK
We sense that you may be the "voice from
the outer world".  Both moons told us of
you.  You must pass tests before we will
know... you must conquer the beast of the
desert, both his outer and his deadly
inner powers.
(moves back)
Speak to us... from the outer world.

Paul turns and gathers courage to address the
multitude below.

PAUL
(inner voice)
I am only a seed.
(out loud)
I am Usul... Paul Muad'dib.
--
CROWDS
(loud murmur)
Muad'dib!

MONK
The legend.

PAUL
(inner voice)
No one ever dreamed there would be so
many.
(out loud)
Our shared enemy the Harkonnens, are once
again in control of Arrakis.  Stilgar,
your leader, has asked me and my mother to
crush the Harkonnens.  We must do more
than this.  We must totally destroy all
spice production on Arrakis.  The Guild
and the entire universe depends on spice.

"He who can destroy a thing, controls a
thing".

I will take one hundred of your warriors
and train them.  This one hundred will
train the thousands that remain.  When the
spice flow stops, all eyes will turn to
Arrakis.  The Baron and the Emperor
himself will be forced to deal with us.
Arrakis will become the center of the
Universe.
(inner voice)
The dream unfolds.

181. through 181A.  (Deleted)

182. INT. TRAINING ROOM - SIETCH TABR - DAY

Large room with a low ceiling.  A drummer playing
makes a low ECHOING MUSICAL HIT.  A big block of
stone is moved across coarse sand -- back and forth
-- fast.  A rhythm is started -- powerful.  Paul
enters, pauses and looks to Jessica - he stands in
front of over 100 Fremen men.  Jessica sits behind
him alongside Stilgar.

A large rock obelisk has been placed near Paul for
this demonstration.

PAUL
The weirding way has long been a Bene
Gesserit secret.  With my mother's help,
my father isolated an element of the
weirding way and externalised it.
--
PAUL (CONT'D)
Because of the Harkonnen treachery, my
father's armies were never able to fully
develop this new form.  This is what I
will teach you.  You will be the fiercest
and most feared fighters in the Universe.

Our way of battle is built on rhythm.  You
understand rhythm like this but you do not
yet understand the rhythm of the higher
sounds, sounds that heal and build...
sounds that destroy.  Motion is the base.
You understand the motion... but you do
not yet understand the motion that heals
and builds... motions that destroy...

Orato!
(he moves forward)
This obelisk is of your hardest stone.
Kick it...
(he does -- the rock doesn't move)
Hit it...
(he does -- the rock doesn't move)
Yell at it...

ORATO
Break!

The Fremen laugh -- the rock doesn't move.

A Fremen with a lasgun tries to cut it.  Paul
motions him back, slightly.

PAUL
Move back!

Paul also moves back.  He switches on his weirding
module.  He opens his mouth and makes a small SOUND,
which the module amplifies.

PAUL
Chuksa!

The sound shatters the obelisk to pieces.  The one
hundred Fremen YELL with surprise and awe.

100 FREMEN
Achiii!
--
PAUL
This is part of the weirding way that we
will teach you.  Some thoughts have a
certain sound... that being the equivalent
to a form.  Through sound and motion you
will be able to paralyze nerves, shatter
bones, set fires, suffocate an enemy or
burst his organs....  We will kill until
no Harkonnen breathes Arrakeen air.

100 FREMEN
Muad'dib!

PAUL
(inner voice)
To avenge my father, I will turn you into
killing machines.

Stilgar turns to Jessica.

STILGAR
Sayyadina.  Our Reverend Mother tells me
she is too old... She has been calling
through space and time for you to come and
let her rest.  She asks that you pass
within.

JESSICA
(inner voice)
They want me to take the Water of Life...
the Truthsayer drug... so dangerous,
yet... we must move swiftly if we're to
secure our place among these Fremen.
(out loud)
I will try to pass within.

STILGAR
Death may be the result....  Are you sure?

JESSICA
(inner voice)
I must do this for Paul, but what of my
unborn child?

DISSOLVE TO:

183. through 187.   (Deleted)
--
188. INT. ROCK LEDGE - HALL OF RITES - SIETCH TABR -
NIGHT

Fremen carry the Fremen REVEREND MOTHER RAMALLO in
on a litter.  The old Reverend Mother is old a frail
yet extremely beautiful and mysterious.  She turns
to Paul and Jessica with a strange look.

REVEREND MOTHER RAMALLO
(to Jessica, in an ancient voice)
So you are the ones.

She turns away towards the monks who are very busy
blowing horns and waving pots of burning spice,
purifying the area of the rite.  Several Fremen blow
on dip sticks and a FEMALE CHOIR begins a haunting
chorale as the giant pipe organ blows beautiful low
notes below.

Paul looks to his mother.

He then sees Chani.

CU Chani.

CU Paul -- he cannot stop looking at her.

Stilgar motions to Paul.

STILGAR
(whispering to Paul)
Do you know the Water of Life?... Come...
...Watch... the mystery of mysteries...
the end and the beginning.

He shows Paul through a narrow passageway -- almost
a slot through the stone to a small room.  Through
an opening in the stone wall, Paul is shown a very
strange and somewhat horrifying scene.

189. INT. BABY WORM - MAKER ROOM - SIETCH TABR - NIGHT

A thirty-foot baby worm is being lowered into a
stone chamber.  The chamber is then covered with a
wire top.  Valves are turned and water rushes into
the chamber.  The worm begins to writhe violently
and leap and bang against the bars above.  The worm
begins to turn inside out from the mouth back and it
begins to gag.  Some monks and watermasters quickly
drain the stone chamber and wrench the worm out
using large steel hooks.  They hold the worm above a
large tub.  A watermaster-reed man runs a long reed
in to the worm, causing it to spasm and gag up a
beautiful deep blue bile as it dies.

189A.     INT. MAKER ROOM - SIETCH TABR - NIGHT

The bile and worm water are combined in ceremonial
containers.  Paul turns to Stilgar.
--
STILGAR
The Water of Life.

PAUL
(inner voice)
The most lethal poison in the Universe.

Then we HEAR from Paul's memory his conversation
with the Reverend Mother:

REVEREND MOTHER
... Many men have tried.

PAUL
Did they try and fail?

REVEREND MOTHER
They tried and died.

190. INT. ROCK LEDGE - HALL OF RITES - SIETCH TABR -
NIGHT

Stilgar and Paul return to the ledge above the Hall
of Rites.  A MONK PRIEST steps forward, addresses
the crowd, silencing them.  The other monks move
back carrying their smoking cleansing bags.

MONK #1
One among us has consented to enter the
rite.  She will attempt to pass within
that we not lose the strength of our
Reverend Mother.

PAUL
(inner voice)(turning to his mother)
What if she should fail?

He brings the jug close to Jessica.

MONK #1
Drink!

Jessica drinks.

JESSICA
(inner voice)
The ultimate awareness spectrum narcotic.
I must transform the poison configuration
within my body... the blue must be made
clean.

She swallows.  Her body contorts and spasms
violently.  She screams.  The Reverend Mother
screams with her.
--
191  (Deleted)

192. INT. ROCK LEDGE - HALL OF RITES - SIETCH TABR -
NIGHT

We see Jessica sitting, shoulders tight and spasming
-- straining, her eyelids half-closed and
flickering.

193. (Deleted)

194. INT. ROCK LEDGE - HALL OF RITES - SIETCH TABR -
NIGHT

The old Reverend Mother slowly extends a hand toward
Jessica's shoulder.

195. JESSICA - MENTAL IMAGE

Inside Jessica, we see the Reverend Mother Ramallo's
hand descend through the dark void.  Shimmering
water starts to ripple, lightly stirring an image of
Jessica.

As the hand penetrates, something deep within her
starts to GLOW.  It is a fetus, a female.  The
Reverend Mother Ramallo's hand flinches as it
touches the fetus.  The fetus sparks to life -
screaming and rapidly spasming upwards on its
umbilical cord.

195A.     (Deleted)

196. INT. ROCK LEDGE - WALL OF RITES - SIETCH TABR -
NIGHT

REVEREND MOTHER RAMALLO
(whispering urgently into Jessica's
ear)
You should have told us.

197. JESSICA'S MENTAL IMAGE - FETUS

REVEREND MOTHER RAMALLO (V.O.)
(gasping)
Great Mother!  This changes both!  What
have we done?
--
197A.     INT. THE TUNNEL - NIGHT

Jessica and the fetus rush mentally through a dark
strangely worm-like tunnel until suddenly, a gaping
black hole appears.  A horrible WIND, SPARKS and
circles of expanding light issues from it.

JESSICA (V.O)
(inner voice)(fearful)
No!  This is the place where we cannot
look.  The place only for the eyes of the
Kwisatz Haderach.

197B.     THE FETUS - NIGHT

The fetus twists down the tunnel to join Jessica,
her umbilical cord trailing behind.  She SCREAMS as
she looks into the hole.

197C.     THE NAVIGATOR - NIGHT

She and Jessica see a shape moving deep within the
windy hole.  It is a Third Stage Navigator, ROARING.

JESSICA
What is this?...  Is this what kills the
men who enter here?

She quickly takes the fetus back up the tunnel.  As
they move:

JESSICA (V.O.)(CONT'D)
(inner voice)
Now my daughter and I are both Reverend
Mothers.

REVEREND MOTHER RAMALLO (V.O.)
(distant)
I've been a long time waiting for you.
Here is my life.

198. INT. ROCK LEDGE - HALL OF RITES - SIETCH TABR -
NIGHT

The old Reverend Mother Ramallo slumps forward onto
the stone, dead.  The crowd waits.  The corpse is
tenderly removed.  Jessica very slowly opens her
eyes and looks about her.  The monk holds the jug to
her lips.

MONK
Change it that we may all drink of it.
--
Jessica spews water into the spout.  The monk swirls
the jug, sniffs at the spout and then drinks.

MONK (CONT'D)
It is changed!

PAUL
(inner voice)
She did it!

199. INT. HALL OF RITES - SIETCH TABR - NIGHT

The Fremen suddenly turn their attention to Paul....
They whisper "It is the prophecy!"  They soon begin
to CHANT... "Muad'dib....  Muad'dib" over and over
again.  The chanting sounds fill the hall along with
the ghostly wind organ.

200. (Deleted)

201. INT. HALL OF RITES - SIETCH TABR - NIGHT

Down below, the crowds continue CHANTING "Muad'dib,
Muad'dib."

202. INT. ROCK LEDGE - HALL OF RITES - SIETCH TABR -
NIGHT

Paul continues to stare at Chani.  He moves to her.
Chani turns.  Paul is at her side.  Their eyes meet
and lock.

CHANI
(whispering)
Come with me.

203. INT. PASSAGEWAY ON ROCK LEDGE - SIETCH TABR - NIGHT

At the end of the dark black corridor, Chani turns
and she and Paul fall together in a long kiss filled
with love.

PAUL
Chani....  I love you... I've always loved
you....
--
204. through 209.   (Deleted)

169. INT. STAIRCASE - GEIDI PRIME - DAY

The Baron and Feyd descend several steps into a
darker area of Geidi Prime.  Feyd is carrying a
strange creature in a small wire cage.  The Baron is
floating as he descends.

BARON
(takes a drink)
Feyd, even though he's aging, Thufir is
one of the finest Mentats in the
Universe... and he's mine, Feyd... all
mine....  Quiet now.

FEYD
I will.

170. INT. BASEMENT ROOM - GEIDI PRIME - DAY

Nefud stands eating candies behind Thufir's chair.
Nefud has a stun gun, even though Thufir's hands are
tied.  The Baron enters with Feyd.

BARON
Oh Thufir, I see they've installed your
heart plug already....  Don't be angry.
Everyone gets one here.  But this is not
why we're here.  We've brought you a
little cat, Thufir.  You must care for it
if you wish to live.  A poison has been
introduced into you, Thufir Hawat.  By
milking this smooth little cat body each
day you receive your antidote... it must
be done each day....  Also, you must do
something for me if you wish to live.  You
know I lost Piter, my dear Mentat...

Thufir gives the Baron a weak, wide-eyed stare.

FEYD
All I can see is an Atreides that I want
to kill.

BARON
Feyd, no, no!  Thufir's a Harkonnen now,
aren't you Thufir?

THUFIR
(inner voice)
My dear Duke... how I have failed you.
--
211. INT. JESSICA'S ROOM - SIETCH TABR - NIGHT

Jessica's face shows signs of straining.  Women move
around her, Chani and Harah at her side, helping her
give birth.  Suddenly ALIA is born and her freshly-
born moist body is held up in front of Jessica.
Alia's eyes snap open, burning brightly.

HARAH
What will you call her?

JESSICA
Alia.

As they lift Alia for Jessica to see...

ALIA
Mother.

210. INT. TRAINING ROOM - SIETCH TABR - NIGHT

Paul walks down the steps into the training room -
followed by Harah's two sons.  He pauses at the foot
of the steps.

PAUL
Activate your weirding modules...

Paul activates his, and the Fremens follow suit.

PAUL
Set the range for two meters.

Paul walks down the line of Fremen.

PAUL
Korba...
(points to robot)
The arm...

KORBA
(aiming the module)
Chuuk-sa...

PAUL
Motion... Chuuk-sa...

KORBA
Chuuuk-sa...

He fires the module and the arm of the robot is shot
off.  Paul smiles and hits him on the shoulder -
Paul walks on.
--
PAUL
Stilgar...

One of the FREMEN calls out to Paul.

A FREMEN
Muad'dib!...

The word `Muad'dib' causes a tremendous power to
build.  The module shakes violently in his hand - it
suddenly fires upwards, and the wall explodes.

PAUL
(inner voice)
My own name is a killing word.  Will it be
a healing word as well?

211A.     NEW SCENE

STILGAR
(to Paul as he applies red colour to
the shoulders of several large Fremen
men)
Usul... these are fifteen of our fiercest
fighters to serve you as your guard... the
Fedaykin.

He pauses, then holds up his brilliantly red hand.

212. (Deleted)

213. EXT. DESERT - DAY

An EXPLOSION.  Paul turns and his eyes are totally
blue.  He lifts binoculars to them and looks.  He
sees the Fremen fighters below charging at the
Harkonnens.  As the Fremen run they make powerful
SOUNDS with their weirding modules, exploding
everything in their path and catching things on
fire.

213A.     EXT. CARRYALL - DESERT - DAY

In the distance, a huge spice carryall is shot down
and it falls to the ground EXPLODING more violently
on impact.

213. BACK TO SCENE

PAUL
Now!
--
Stilgar signals, and Fremen run behind them.

PAIL (CONT'D)
(to Stilgar)
They're even better on the battlefield
than in the training rooms!!
(inner voice)
Sound... as a weapon.  If only you could
see them, father.

Paul smiles as he looks at the battle in the
distance.

PAUL (CONT'D)
(his V.O. from the past)
When the spice flow stops, the entire
Universe will turn to Arrakis.  The Baron
and the Emperor himself will be forced to
deal with us.

214. INT. PASSAGEWAYS - ARRAKEEN - DAY

Rabban stares dumbfounded as many Harkonnen wounded
and dead are brought through the passageway beyond.
Rabban grabs a Harkonnen and asks:

RABBAN
What happened?  What happened to you?
What is he saying?

WOUNDED HARKONNEN
Muad'dib!...  Muad'dib!... Muad'dib!...
Muad'dib!

Rabban pushes him away.

A HARKONNEN SOLDIER
He's been repeating that name ever since
we found him.

RABBAN
Who is this Muad'dib?

215. EXT. DEEP DESERT - DAY

HEAT WAVES; dunes.  A big thumper is forced into the
sands.  A RHYTHM is heard pounding on Fremen hand
drums and rhythm instruments.  Feet scramble.  Black
stillsuited Fedaykin warrior bodyguards gather.
Stilgar turns.
--
STILGAR
(to Paul)
Usul... It is time you become a
sandrider... and travel as a Fremen.  Take
the kiswa maker hook of our sietch and
ride as a leader of men.

216. (Deleted)

217. EXT. DEEP DESERT - DAY

As Paul leaves the troop to plant the second
thumper:

STILGAR (V.O.)
Two thumpers are planted.  The worm may
not surface for the first - he will rise
for the second.  Remember, when the worm
approaches, you must be utterly still...
and close enough to plant the hook firmly
under a ring segment....  The worm will
turn to lift this exposed area as far from
the abrasive sand as possible and it will
take you with it -- to the top.  Do not
get too close as he approaches... the sand
will engulf you....  Wait till the head of
the worm passes -- then go... quickly.

STILGAR & FREMEN
Shai-Hulud... Shai-Hulud.

In the distance the telltale SOUND of the worm's
approach begins.  This worm is deep underground and
the sound is low and the ground trembles violently.

PAUL
(inner voice)
Only the very strong ones travel this
deep....

The SOUND and VIBRATIONS continue to build.  In the
distance, the Fedaykin and Stilgar watch.

STILGAR
(to the others)
Usul has called a big one.  Again... it is
the legend.

218. (Deleted)
--
219. EXT. DEEP DESERT - DAY

HEAT WAVES... dunes RHYTHM.  THUNDEROUS approach of
the worm.  Paul still cannot see the worm, but the
sound begins to drown out the Fremen rhythm
instruments and the sand begins to VIBRATE.
Suddenly, Paul SEES...

219A.     EXT. WORM - DEEP DESERT - DAY

...a mountain of sands rise up, towering, thundering
-- lightning SPARKS fissuring throughout the air
above the worm.

The mountain approaches at a terrifying speed.
Then, the worm appears -- rushing.  The mouth, at
first a small opening, begins to widen -- exposing a
thousand glistening teeth.

219B.     EXT. DESERT - DAY

Paul freezes.  He lets the worm get closer and
closer.  The HEAT WAVES distort the gigantic form,
making it more hideous -- more foreign.  He moves
forward.  The others watch anxiously.  This worm is
big.  It is so much larger than imaged.  Its top
towers 125 feet in the air.  The segments are each
ten feet wide.

219C.     EXT. VERTICAL SECTION OF WORM - DESERT - DAY

Paul gets close and running alongside, he plants the
hook under a segment and pulls back.  The SOUND is
excruciatingly loud.  The sand is so deep and more
is being thrown out beneath the body of the worm.
Paul gets caught in it and falls. He narrowly
escapes being sucked under the beast.  He gets up --
runs again and plants the hook once more.  He runs
faster, bending the segment open to expose the
tender flesh.

219D.     EXT. FULL-SIZE SECTION OF WORM - DESERT - DAY

Suddenly the worm begins to turn.  Paul pulls
himself up the body as it turns -- holding onto the
hook.  Soon he is fifty -- sixty -- seventy feet off
the ground -- going higher.  The giant worm gets the
second thumper and Paul at that moment climbs to the
top.  He plants the second hook.

PAUL
(inner voice)
A sandrider!...

Paul works the hooks into the breathing holes along
the body...
--
219E.     EXT. DESERT - DAY

...causing the great beast to make a slow turn
toward Stilgar and the bodyguard.  They set
themselves and as the worm passes...

219F.     EXT. FULL-SIZE SECTION OF WORM - DESERT - DAY

...they all clamber on, climbing up the sides to the
top.

PAUL
(yelling)
Long live the fighters!

They return the traditional CALL and Paul steers the
maker in a giant circle.  They head out across the
dunes.

219G.     (Deleted)

219I.     EXT. DESERT - DAY

Rabban and Harkonnens in the desert.  Rabban
observes tremendous destruction of his spice
harvesters and carryalls.

219K.     EMPEROR'S WORLD REPORT

VOICE
Seventeen Great Houses of the Lansraad
have reported a significant delay in
delivery of spice per CHOAM agreement.
This constitutes a serious violation of
CHOAM codes.  Contact Baron Vladimir
Harkonnen immediately.

219H.     INT. GREAT HALL - ARRAKEEN PALACE - DAY

A furious Rabban sirs in a black steel tub in the
Great Hall.  A squad of TROOPS stands at attention
in front of him, listening to his screaming fit.

RABBAN
Falsify the reports.  We can't hide it
all, tell them we've lost only two hundred
harvesters... and forty carryalls... and
don't let my uncle know about the
destruction of the spice silos....  I will
catch this Muad'dib and suck the blood
from him!!  SUCK THE BLOOD FROM HIM!!!
--
219J. through 222.  (Deleted)

226A.     EXT. HARVESTER - DESERT - DAY

SMOKE billows from a burning harvester.

226B.     EXT. DESERT - DAY

Fighting is going on between Fremen and some
smugglers.  Paul moves down a smokey dune with
Stilgar followed by Fremen and Fedaykin.

PAUL
We surprised a band of smugglers.

STILGAR
(racing into thick smoke)
Too bad... thought they were Harkonnen.

Paul and Stilgar move through the smoke.  A man runs
up with a maula pistol aimed at Paul but Paul spins
and punctures the man's chest with a sound from his
weirding module.  Paul turns and a large figure
comes through the smoke.  They surprise each other.
The figure holds a gun.

PAUL
Gurney!...

The figure stops -- stunned.

PAUL (CONT'D)
You've no need of your weapons with me
Gurney Halleck.

GURNEY
(peering; whisper of hope)
Paul!!  Paul!!

PAUL
Don't you trust your own eyes.

GURNEY
They said you were dead.  They said...

Paul shows him the signet ring on his fingers.
Gurney moves forward, his eyes tearing, and the two
embrace each other and pound each other on the back.

GURNEY
You young pup!  You young pup!
--
227. NEW SCENE - WORLD REPORT

VOICE
Stand-by... warning... we have just
received a coded threat from the Guild.
Spice production is in serious jeopardy...
Giedi Prime supplying false reports...
Guild to visit Emperor in one standard
day.

228. INT. THRONE ROOM - EMPEROR'S PALACE - NIGHT

The Emperor sits on his throne.  Behind him are his
Sardaukar officers.  In front of him are several
Guildsmen.  One holds a large electrical apparatus
up to the face plate of another which translates his
strange voice into English.

TANKED GUILDSMAN #2
Emperor Shaddam IV... You have one last
chance to take matters into your own hands
and bring the situation under the control
on Arrakis.

EMPEROR
What do you mean one last...

TANKED GUILDSMAN #2
Do not speak!...  Listen!...  You do not
have more than this one chance....  I
represent the entire Guild in this
matter....  You have failed to kill the
Atreides heir... Paul.

EMPEROR
But he was said to...

TANKED GUILDSMEN #2
(moans like a cow)
Noooooo... he is not dead.  He is not
eaten by worms as you have wanted to
believe.  He is not missing.  He is in the
deep desert with the Fremen.  The Spice is
in great danger.  We are not asking... we
are telling... remedy the situation or you
will live out your life in a pain
amplifier.

The Guildsmen turn and leave.

EMPEROR
Who is this Paula Atreides to the Guild?
And why?

222A.     INT. JESSICA'S ROOM - SIETCH TABR - DAY

Jessica sits with Harah.
--
HARAH
Your Reverence, I don't wish to upset you,
but the other women...

223. INT. PASSAGEWAY - SIETCH TABR - DAY

At the end of the passageway, standing alone --
staring with powerful intense blue-within-blue eyes
-- is ALIA.  She's listening mentally.

HARAH (V.O.)
...they don't like Alia around.  She
frightens them.  It is the strangeness of
your daughter.

224. INT. JESSICA'S ROOM - SIETCH TABR - DAY

JESSICA
It's the way she speaks of things...

Alia is listening - then exits.

225. INT. PASSAGEWAY - SIETCH TABR - DAY

Alia listens mentally.

JESSICA (V.O.)
...beyond her years and of things no child
could know -- things of the past.
(pause)

Alia begins walking.  She appears to be angry.

JESSICA (V.O.)(CONT'D)
A daughter who knew at birth everything I
know...

226. INT. JESSICA'S ROOM - SIETCH TABR - DAY

HARAH
But Your Reverence, they won't have her
around them.

Alia enters.

ALIA
(screaming little adult voice)
Harah!  Would they deny me the right to
use this mind?...
--
ALIA (CONT'D)
(using The Voice)
Would they deny me the right to use this
voice?...

Harah's head nearly bursts with pain and she SCREAMS
as if she were dying.

JESSICA
Alia!

226A.     (Deleted)

228. BACK TO SCENE - EMPEROR'S THRONE ROOM

EMPEROR
(firmly)
I want fifty legions of Sardaukar on
Arrakis at once.

SARDAUKAR OFFICER #1
Fifty legions?...
(he looks at the other officers with
worry)
That's our entire reserves as well.

EMPEROR
This is genocide...  the deliberate and
systematic destruction of all life on
Arrakis.

228A.     NEW SCENE

Ships over Arrakis.

229. through 230.   (Deleted)

231. INT. PAUL'S ROOM - SIETCH

There is a growing, powerful sound of a worm
approaching as Paul and Chani are lying together in
the darkness of their sleeping chamber.  Paul's eyes
snap open and he sees Chani looking down at him (the
last image of the future in the desert).

CHANI
You were calling my name... it frightened
me.
--
Page Missing
--
In the hollow of a huge dune, Paul stops with Chani.
They share a look into each other's eyes.  Paul
turns towards the Fedaykin and nods.  They move in
quickly to tie and wrap Paul in Fremen rope.  They
move back and wait quietly.  Chani moves in very
close to Paul.  She holds a glass vial of the blue
water of life.

PAUL
Hurry!  All I see is darkness.

CHANI
Paul... I will love you forever... in life
or in death... let Shai-Hulud judge now.
(whispering)
You are my life.

She pours the blue liquid into Paul's mouth.  Slow
move into Paul's face as:

PAUL
(inner voice)
Now... the test of the water of life...
what is it that waits for me in this
darkness?

233A.     INT. PAUL'S MIND

Fade to black then dissolves to dark blue fluid.  A
blue drop falls into the blue fluid - a huge low
thud - then quiet.

233B.     EXT. DESERT - NIGHT

Cut to Paul screaming horribly in the desert.

235. INT. JESSICA'S ROOM - SIETCH TABR - NIGHT

Alia walks forward in the very dark room.  Blood
rushes from her nose.  She forces herself to walk to
Jessica's bed.  She finds that Jessica's nose is
bleeding also.  Jessica wakes in pain.  They stare
at each other in the darkness.

JESSICA
ALIA!

ALIA
Mother - help me!

JESSICA
(struggling)
Alia!  What is it?
--
ALIA
It's Paul.  He's taken the Water of Life.

233C.     INT. PAUL'S MIND

Cut to quiet black - dissolve again to blue -
another drop - low thud - quietness - fade to black.

245A.     EXT. EMPEROR'S SPACESHIP - SPACE

The Emperor's space ship soars towards us.

246. INT. EMPEROR'S SPACE SHIP - SPACE

The Reverend Mother Helen Mohiam is on the floor,
bleeding from the nose and weak from pain.  The
Emperor looks on in horror.

233D.     INT. PAUL'S MIND

Suddenly screaming towards us is white rings, stars
and a huge Guild Navigator.

233E.     EXT. DESERT - NIGHT

Cut to Paul's eyes - tightly closed, oozing fresh
blood.

233F.     EXT. DESERT - NIGHT

SCREAMING SOUND.  Paul's mouth opens and a giant
wind is stirred on the desert.

234. (Deleted)

235A.     INT. PAUL'S MIND

Navigator chewing giant eye and spewing blood and
light and sounds.  Paul's mouth double exposes over
Navigator and eye.  The sound from Paul's mouth
destroys the Navigator and opens the Alam.
Navigator bursts into a huge light ring and we
quickly travel through ring after ring and masses of
liquid stars.  The light increases until it is
blinding and then in the light...
--
235B.     EXT. FLOWER BLOSSOMING

A golden flower blossoms and glows brilliantly -
suddenly the powerful sound of an approaching worm.

236. through 239.   (Deleted)

240. EXT. DESERT - NIGHT

Chani and the Fedaykin freeze and watch in horror as
seven giant worms converge on them.  The worms break
the desert surface and rise, towering over them.
The worms hover and wait.

DISSOLVE TO:

241. through 245.   (Deleted)

240A.     EXT. DESERT - DAY

Chani looks to the Fedaykin, then they look at Paul
who lies motionless.  She cuts the rope bonds with
her crysknife.  Her fingers tremble as does the
whole of the desert.

Paul's eyes snap open.  He sits up slowly.  Chani
stares at him in awe.

CHANI
Paul... Paul.
240B.     EXT. WAVE CRASHING

A huge wave crashes and Paul sees the image of his
father.  Paul slowly gets to his knees, then stands.

240C.     EXT. DESERT - NIGHT

PAUL
Father!...  Father!  THE SLEEPER HAS
AWAKENED.

Giant echoes of this phrase reverberate across the
vast desert.  The worms bend back into the sand and
leave with thundering power.

MUSIC FULL.

247. through 250.   (Deleted)
--
251. EXT. ROCK LEDGE - HALL OF RITES - SIETCH TABR -
NIGHT

The Rock Ledge of Sietch Tabr is filled with
Fedaykin and monks; Chani, Jessica, Gurney and
Stilgar stand together near the back.  Paul moves
out on the Rock Ledge overlooking the Hall of Rites
which is crowded with Fremen warriors who chant
"Maud'Dib" along with the powerful sounds of the
WIND ORGAN and FREMEN war DRUMS.

Paul raises his open hand.  SILENCE.  Only the organ
continues with a soft low NOTE.  The Fremen wait.

PAUL
Arrakis... Dune... Desert Planet.

A quiet, haunting MOAN of recognition of a master
rises from the Fremen.

PAUL (CONT'D)
(loud)
Your time has come.
(inner voice)
Father... our time has come.
(out loud again)
A storm is coming -- our storm... and when
it comes it will shake the Universe.
Emperor... we come for you.

A thunderous ROAR arises.  War DRUMS pound.  The
ORGAN blows hurricaine of power through the sietch.

PAUL
(he raises crysknife)
Long live the fighters!

STILGAR
Long live the fighters!

Fremen carrying weapons begin moving out in long
lines from the Hall as the war DRUMS pound.

251A. through 252B. (Deleted)

265. INT. HARKONNEN `THOPTER - DAY

In one `thopter sits the Baron Harkonnen.  He is
flown down to the Emperor's ship.

253. EXT. ROCK OUTCROPPING - DEEP DESERT - DAY

A sietch door opens and Fremen warriors stream out.
--
254. (Deleted)

255. EXT. DEEP DESERT - DAY

The WIND is howling and is starting to blow the
sand.  Dark sand clouds form in the distance.

256. EXT. ROCK OUTCROPPING - DEEP DESERT - DAY

Another sietch door opens and hundreds and thousands
more Fremen pour out.

257. EXT. SHIELD WALL - ARRAKEEN - DAY

Paul, Stilgar and Gurney watch the Emperor's
enormous ship on the Arrakeen landing field below.

257A. through 258.  (Deleted)

260. EXT. DEEP DESERT - DAY

Thousands of Fremen are running, planting thumpers
as they go.

259. INT. COMMUNICATION ROOM - ARRAKEEN - DAY

PAUL
Gurney, when the storm hits... set off the
atomics.  I want an opening through the
entire Shield Wall.  Stilgar?  Do we have
wormsign?

Stilgar and Gurney laugh.

STILGAR
Usul... We have wormsign, the likes of
which even God has never seen.

Paul smiles.

261. EXT. DEEP DESERT - DAY

Looking down over the huge desert it looks like a
living sea of wormsign.  Everywhere ripples appear
and worms are surfacing.
--
261A.     EXT. DEEP DESERT - DAY

Thousands of Fremen are running, positioning
themselves to mount and ride.

262. EXT. DESERT - DAY

Dust clouds grow faster and the speed of the WIND
increases.  Sand particles hit at a rock outcropping
and up close they sound like giant warrior drummers
pounding before battle.

263. EXT. HARKONNEN SHIPS - DESERT - NIGHT

Suddenly above come hundreds of SCREAMING space
ships zooming down across the desert floor and
towards the landing field.

264. (Deleted)

266. EXT. DESERT - DAY

The storm is howling now.  Sand blasts against rock
and rips pieces away.

267. INT. STEEL TENT - EMPEROR'S SPACE SHIP - DAY

EMPEROR
Bring in that floating fat man... the
Baron.

The Baron is brought in.  Distant warning SIGNALS
begin.  The Baron is fighting to contain his fear
because RABBAN'S HEAD SITS ALL BLOODY ON THE FLOOR
in front of him.  Finally the Emperor speaks.

EMPEROR
Why have you brought me here?

BARON
Your Highness... There must be some
mistake... I never requested your
presence.

EMPEROR
Ah?  But your lack of action demanded it.
Your dreadful mismanagement, your bad
judgement in assigning to Rabban --
(he gestures toward the head)
-- the governorship....  You forced me to
come here and set things straight...
personally.
--
A VOICE
Bring in the messenger.

Alia is brought in by the Sardaukar soldiers.  She
is smiling.

ALIA
I am the messenger from Muad'dib.  Poor
Emperor, I'm afraid my brother won't be
very pleased with you.

EMPEROR
Silence!...  I do not court your brother's
pleasure.

Suddenly the Reverend Mother looks horrified and
grabs her throat.

REVEREND MOTHER
(struggling, speaking)
Kill this child!!  She's an abomination!!
Kill her.
(points to Alia, who is smiling at
her)
Get out of my mind!!!

ALIA
Not until you tell them both who I really
am.

REVEREND MOTHER
(strained speech void of emotion)
Sister of Paul Muad'dib.

The Reverend Mother slumps.  The Baron's mouth flies
open.  The Emperor's face goes pale, his lips
tremble.

EMPEROR
Paul's sister... Paul is Muad'dib?!

He turns quickly and looks at the two Guild agents
present in the room.  They stare at him icily.  Alia
is smiles happily.

268. INT. COMMUNICATION ROOM - ARRAKEEN - DAY

Paul smiles.

PAUL
(laughs)(to Gurney and Stilgar)
Alia keeps pace with the storm.
--
Gurney and Stilgar don't understand.  Suddenly
enormous dust clouds and LIGHTNING sweep up over the
Shield Wall.

PAUL
Gurney, now!

Gurney gives a hand signal and...

GURNEY
(they put on their hoods)
Atomics!

269. EXT. SHIELD WALL - ARRAKEEN - DAY

...TWENTY EXPLOSIONS of hydrogen bomb intensity go
off in a row, cutting a huge gorge through the width
of the massive Shield Wall.  As the EXPLOSIONS go
off, a WIND howls, destroying much of Arrakeen and
covering the rest with tons of sand.  Sand rips at
the Palace and the Emperor's ship.

270. INT. STEEL TENT - EMPEROR'S SPACE SHIP - DAY

Alia smiles as they HEAR the tremendous roaring,
atomic screams of the explosions.  The Emperor's
ship's warning SIGNALS are now close and loud.

ALIA
My brother is coming... with many Fremen
warriors.

A Sardaukar rushes in.

SARDAUKAR OFFICER #2
The Shield Wall is gone.

EMPEROR
Impossible!

ALIA
Not impossible.  I told you... He is here
now.

SARDAUKAR OFFICER #2
Majesty, into the ship!

EMPEROR
(to his officers)(rising)
Release the Sardaukar.  Baron... give this
little abomination to the storm.

They all leave the room, including the Sardaukars.
--
270A. through 271.  (Deleted)

272. INT. STEEL TENT - EMPEROR'S SPACE SHIP - DAY

BARON
I have her, Majesty!

The Baron floats down to her.  Alia turns to him --
still smiling.  With a flash of her hand she reaches
out and swipes at the Baron's face.  He CRIES OUT in
pain.  She pulls his suspensor plugs and pushes him
back, then slowly shows him the tiny needle she
holds in her hand.  He spins crazily as he screams
from the poison.

273. EXT. SHIELD WALL - ARRAKEEN - DAY

Worms, each with hundreds of Fremen on them, come
slithering through the newly-formed canyon in the
Shield Wall.

273A.     EXT. WORMS - SHIELD WALL - ARRAKEEN - DAY

Paul rides the lead worm with Gurney and Stilgar by
his side.  The storm is howling and blowing with
horrifying intensity.

273B.     INT. EMPEROR'S SPACE SHIP - CONTROL ROOM - DAY

The Emperor and his Sardaukar officers in a darkened
room where they are horrified to see on the screens
the hundreds of worms which are coming into the
Arrakeen valley.  All their faces show fear.

272. BACK TO SCENE
INT. EMPEROR'S SPACE SHIP - GREEN THRONE ROOM - DAY

Suddenly the wall behind Alia and the spinning Baron
is completely blown away by a BLAST.

The Baron floats and spins out into the storm.

274. EXT. ARRAKEEN - DAY

As the worms enter the Arrakeen basin they meet the
Sardaukar.  The Sardaukar don't have a chance -- the
worms suck them up by the hundreds.  The Fremen on
the worm's backs fire weapons, killing the few
Sardaukar the worms leave behind.

275. EXT. LANDING FIELD - ARRAKEEN - DAY

The space ships which were recently airborne are now
crashing because of the storm.
--
272A.     NEW SCENE

The Baron floats and spins high in the dust clouds
of the storm over the Arrakeen Valley.

274A.     NEW SCENE

The worm, that Paul, Gurney and Stilgar are riding,
suddenly rears up.  Its mouth opens.  The Baron
appears as a tiny spinning shape.  He flies directly
into the mouth of this collosal worm and is
devoured.

277. EXT. STEEL TENT - LANDING FIELD - ARRAKEEN - DAY

A thousand Fremen battle Sardaukar outside the
Emperor's tent.  They soon overpower them and rush
into the giant steel structure.

278. EXT. LANDING FIELD - ARRAKEEN - DAY

The entire airfield is now filled with wild worms,
Fremen, and dead or dying Sardaukar.

276. EXT. LANDING FIELD - ARRAKEEN - DAY

Alia moves dreamily among the dying Sardaukar.

279. through 280.   (Deleted)

281. INT. GREAT HALL - ARRAKEEN PALACE - DAY

Paul enters the Palace hall and the first thing he
sees is the giant bull's head.  The horns have been
blown off and the Atreides banner has been stuffed
and wired into the mouth.

A WIND moans through the Palace.

Paul turns.  Gurney and several guards bring in the
Emperor, Irulan, the Reverend Mother, Sardaukar
generals, Guildsmen, Feyd and Thufir.  The Fedaykin
and Fremen troops line the walls.

Paul's eyes meet Feyd's -- Feyd gives him an evil
smile.

Paul turns and looks at the Emperor, who stares back
defiantly.  Paul moves his gaze to Irulan, who
lowers her eyes.  He then sees his old teacher,
Thufir Hawat, whose tired eyes wander helplessly.
--
PAUL
Gurney... I see Thufir Hawat among the
captives.  Let him stand free.

GURNEY
My Lord?

PAUL
Let him stand free!

The Emperor turns nervously to Feyd, who passes a
golden dagger to Thufir.

FEYD
(to Thufir)
The antidote...

GURNEY
(gestures to Thufir)
Thufir.  Come.

Thufir approaches Paul, concealing the knife.  They
come face to face.  The Emperor seems strangely
tense at this moment.  Paul notices this.  He looks
Thufir over.

PAUL (CONT'D)
(inner voice)
A knife....
(out loud)
In payment of the many years of service to
my family, you may know ask of me anything
you wish.  Anything at all.
(quietly)
Do you need my life, old friend?

He turns his back on him.

PAUL (CONT'D)
(quiet)
It is yours.

Thufir's eyes grow sad and wide.

PAUL
I mean this, Thufir.  If you are to
strike, do it now.

Thufir's hand rises, as Jessica gasps, but the old
Mentat pulls his heart plug out with a quick tearing
motion.  Paul turns and catches him as he sags.

His head lolls back and he looks up to Paul
urgently.
--
THUFIR (CONT'D)
Three... generations... of you...

His breath escapes him and he is dead.

PAUL
(to the guards)
Carry this noble Atreides warrior away.
Do him all honor.

The guards do as they are instructed.

PAUL
Emperor Shadam the IV... there are Guild
Heighliners above us containing many Great
Houses of the Lansraad....  SEND THEM
BACK!

EMPEROR
How dare you speak to me...

GUILDSMAN #2
(speaking into electric microphone)
Stop your speaking!!

PAUL
(to the Guildsmen)
Good.  You have some idea of what I would
do but I will tell it to one who has never
been seen... one who hides deep in the
Heighliner control rooms.  He will hear it
first.

GUILDSMEN #3
(fear)
No!

Paul smiles as we move closer and closer to him.

282. INT. CONTROL ROOM - HEIGHLINER - SPACE

Suddenly we are in the Heighliner control room, near
the floor in the chemical spills.  We move up into
the orange gas.  THUNDERING begins to shake the
Heighliner.

PAUL (V.O.)
Where are you....  Let me see you or there
will be no spice.
--
We move into very thick gas and there is a ROARING.
Suddenly Paul sees the Third Stage Navigator.

PAUL (V.O.)(CONT'D)
You know what I'm about to say is true....
I have the power to destroy the spice
forever.

The Guild Navigator's mouth stretches back in a
horrible MOAN.  The moan becomes more pained and
grows louder and louder.

283. INT. GREAT HALL - ARRAKEEN PALACE - DAY

The Guildsmen in the room are MOANING and SCREAMING
and swarming out towards the doorway -- the Fremen
stop them.  The Emperor and all are amazed and
frightened.  There is a long hush.  The old Reverend
Mother then turns and glares at Paul.

PAUL (CONT'D)
Don't try your powers on me.  Try looking
into that place where you dare not look.
You'll find me there staring back at you!!
You Bene Gesserit have waited ninety
generations to produce the one person your
schemes required.  Here I stand.  But... I
will never be yours.

REVEREND MOTHER
Stop him, Jessica!

JESSICA
Stop him yourself.

PAUL
You saw a part of what the race needs in
the beginning.  In time you perverted the
truth.  You sought to control human
breeding and intermix a select few
according to a selfish master plan.  How
little you understand.

REVEREND MOTHER
You mustn't speak of...

PAUL
(using The Voice)
SILENCE!

The old woman is shot backwards by the power of his
shout.  Her breath is knocked out of her.

PAUL (CONT'D)
I remember your gom jabbar, now you
remember mine.  I can kill with a word.
--
A Fedaykin stand forward and recites from the
prophecy.

FEDAYKIN #1
...and his word shall carry death eternal
to those who stand against the righteous.

Feyd hears this and is angered.

FEYD
The righteous!

PAUL
(to Emperor)
There is a Harkonnen among you.  Give the
Harkonnen a blade and let him stand forth.

EMPEROR
If Feyd wishes, he can meet you with my
blade in his hand.

FEYD
I wish it.
(steps forward)

GURNEY
This is a Harkonnen animal.  Let me,
please, my Lord.

PAUL
The Emperor's blade.

Feyd takes up the Emperor's blade with a smile.
Paul takes out his crysknife.  They begin to circle
each other.

Paul smiles, circling still.  Suddenly, Feyd leaps,
his blade jabbing savagely outward, but Paul easily
evades it, moving away.  They begin to circle again.

He makes another pass at Paul that comes dangerously
close, but again, Paul is away, a frozen smile on
his face.

FEYD
Why prolong the inevitable?  I will kill
you!  I will kill him!

Feyd smiles.  He lashes out biting Paul's hand.
Feyd LAUGHS in triumph.

Feyd leaps forward jabbing, his right hip also
forward.  Yet Paul, although a little slowly, again
reels away.  Again, Feyd thrusts.
--
This time Paul jabs with his crysknife, but Feyd
moves away effortlessly.  Feyd counters and kicks
Paul to the ground.

CHANI
Paul!

Paul is up instantly and he circles with Feyd.

FEYD
(smiling)
Who is the little one?  A pet, perhaps?
Will she deserve my special attentions?

Paul jabs out, his crysknife slashing.  Feyd grabs
his arm, and Paul his, the two men locked in a
straining clinch.  Feyd presses his right hip closer
and closer to Paul's body.  Paul strains to keep it
away.  Suddenly, the gom jabbar flips out of Feyd's
girdle, but on the left side, and he lunges
powerfully with it at Paul, who just barely misses
taking it in his skin.  He throws Feyd back, but not
before Feyd's feet strike out, sending Paul to the
floor.  Feyd leaps onto him.

FEYD
(whispering)
You see... your death... my blade will
finish you.

Suddenly, Paul, with lightning swiftness, pushes
Feyd up and over.  He is on top of him in a flash.

Paul's crysknife flashes up, thrusting upward
through Feyd's jaw.  Feyd's mouth opens as the knife
continues up through his tongue and through to his
brain.  Feyd's eyes go wild, then glaze over as he
jerks dead on the floor.  Paul slowly gets to his
feet, breathing heavily.  Anger still seething in
him, Paul issues a SOUND -- a loud, horrible,
powerful sound, and Feyd's internal organs rupture
and the stone floor under him cracks open.  The
Fedaykin smile.

FEDAYKIN #2
Usul no longer needs the weirding module.

Everyone stares in disbelief.  Paul looks to the
Emperor.

PAUL
Now, I will tell you how it will be.
Irulan shall be my wife, opening the way
for an Atreides to take the throne.

EMPEROR
I sit on the throne!!
--
PAUL
You will sit on a throne on Selusa
Secundus, your prison planet.  Either that
or you will die.

The Emperor is still.  Paul moves to Chani.

PAUL (CONT'D)
(to Chani)
The Princess shall have no more of me than
my name... no child of mine or touch the
softness of glance... nor instant of
desire....  This is my promise to you...
(whispering)
...my love.

Paul turns back to the others.

Jessica turns to Chani and whispers to her.

JESSICA
Think on it Chani... We who carry the name
of concubine... history will call us
wives.

Alia enters with two monks.  She signals and one of
them places a cloak over Paul's shoulders.

PAUL
The Fremen have the word of Muad'dib.
They will have their Holy War to cleanse
the Universe... they will have Arrakis...
Dune... their planet.  There will be
flowing water here open to the sky and
rich green oases.  For the spice there
will always be some desert.  There will be
fierce winds and trials to toughen men.
We Fremen have a saying...
(he stares at the Reverend Mother)
"God created Arrakis to train the
faithful."
One cannot go against the word of God.

Everyone in the room stares at him soundlessly.

ALIA
And how can this be?

There are three powerful drum hits.

ALIA (CONT'D)
For... he is the Kwisatz Haderach!
--
284. EXT. ARRAKEEN PALACE - DUSK

Paul opens his mouth and issues an ever increasing
wind.  Lightning and thunder begin.  Clouds begin to
form over the Palace.  In the half-light of dusk,
thousands of Fremen watch the sky.  Giant golden
lights are illuminated and their rays shoot far into
the sky illuminating the growing clouds.  Five
tremendous bolts of lightning suddenly unleash a
downpour of RAIN ON ARRAKIS.  The Fremen stand
awestruck as they are drenched with water falling
from the sky.

285. INT. GREAT HALL - ARRAKEEN PALACE - DAY

WE MOVE through Paul's glowing blue eyes into
beautiful blue luminescent light.

A gigantic WIND arises, and suddenly appearing in
the blue light is an ocean of light rolling like
gold glass off into infinite.  The blue becomes
darker and a golden lotus flower blooms in the
night.

THE END


This script was found in INFlow. It was shameless taken off from somewhere
else, may god, copyright owners and people who worked hard and were not
credited forgive us.


`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
