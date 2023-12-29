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

TWILIGHT




Written by         

Melissa Rosenberg



Based on the novel by 

Stephenie Meyer





                    SHOOTING DRAFT
                 February 11, 2008



FADE IN:


1 EXT. RAIN FOREST, OLYMPIC NATIONAL PARK, WASHINGTON - DAWN 

Moss-draped. Shadow-drenched. Tortured tree trunks twist 
upward, reaching for rare sunlight. 


BELLA (V.O.)
I'd never given much thought to how I would die..

Suddenly, every creature in the forest is deadly silent. Neither 
bird, beast nor insect make a noise. A predator is near. 

Then, in the distance, hear a tiny SNICK - a twig snapping. 
Abruptly, we're on the move. Fast.


UNKNOWN POV - MOVING

Trees start whipping past us at a dizzying speed, branches 
are dodged with preternatural agility. And we're speeding
up, chasing something. It's exhilarating. Terrifying. 
Finally, up ahead, we get the first glimpse of our prey -
-


A DEER


-- running for its life as it darts through this maze of 
a forest. It sprints forward, but we gain on it. Beyond the deer, 
SEE the forest's edge ahead, white sunlight glowing against the
trees. The buck races for the light. We're just behind it, 
about to emerge from the shadowy darkness -
-


The deer LEAPS into the light in a high arc, hovering (suddenly 
SLOW MOTION) against the WHITE GLARE of the sun... then BAM! 


The deer abruptly plummets out of frame at an unnatural angle, 
leaving the WHITE GLARE to fill the screen. HOLD ON WHITENESS 
-


BELLA (V.O.)


But dying in the place of someone I
love seems like a good way to go..
. 


-- Then into the WHITENESS steps the face of -


2 ISABELLA SWAN, 172


Eyes closed against the sunlight, absorbing its rays. Long, 
dark hair frames alabaster skin. She's a vulnerable,
introverted, imperfect beauty.


BELLA (V.O.)

... So I can't bring myself to 
regret the decision that brought me 
here to die... 


The background comes into focus as we realize we're now in -


2.
EXT. SCOTTSDALE, AZ - DAY


Bella stands at the end of a cul-de-sac on the desert's edge.
The sun blazes behind her -- she bends down and carefully 
scoops a tiny BARREL CACTUS into a clay pot. 


BELLA (V.O.)

... The decision to leave home.

She stares at the cactus in a state of reverie, until 


BLONDE #1 (O.S.)
Bye, Bella!


BELLA'S POV - McMansion ACROSS THE STREET 


Three tanned, athletic, blonde GIRLS hop into a convertible 
Mercedes. Their flawless, bought-and-paid for beauty contrasts 
with Bella's pale naturalness. They wave.


BLONDE #
Good luck at your new school! 


They ADLIB superficial good wishes, "Don't forget to write;"

"We'll miss you." Bella waves back, sweetly, but 
halfheartedly as she steps off the curb.


BELLA
Have a good..

--and trips. When she rights herself, they're already gone.


BELLA
... life. 


Clearly, not close friends. Bella's grown-up demeanor and
innate intelligence become apparent as -
-


BELLA'S MOTHER, RENE, mid 30's --exits their house --it's
low rent for this ritzy neighborhood. Rene is eclectic, 
scattered, anxious, more best friend than parent. She 
thrusts a cell phone at Bella. 


RENE
It won't work again, baby. 


BELLA
You put it on hold. 


RENE
I did? 


BELLA
Look. You also called Mexico.


Rene pushes her playfully, they laugh.



3.
RENE
I'll figure it out. You gotta be able 
to reach me and Phil on the road - 
I 
love saying that - on the road.


BELLA
Very romantic.


PHIL, 31, good looking with an athlete's body, exits the
house, carrying Bella's three suitcases with ease. 


PHIL
If you call crappy motels, backwater 
towns and ballpark hot dogs romantic.


He puts his Phoenix Desert Dogs baseball hat on Rene's head with 
a
kiss. Phil's love of Rene reassures Bella. Phil heads to the old
station wagon to load the luggage, while Rene slips her arm 
through Bella's, clinging to her as they walk to car.


RENE
Now, you know if you change your 
mind, I'll race back here from 
wherever the game is. 


But Rene's strained expression tells us what a great 
sacrifice that would be. Bella forces a smile.


BELLA
I won't change my mind, mom.


RENE
You might. You've always hated Forks. 


BELLA
It's not about Forks, it's about 
Dad. I mean, two weeks a year, we 
barely know each other. 


(off Rene's still worried 
look)
Mom, I want to go. I'll be fine.


But as Rene hugs Bella, we see the truth on BELLA'S FACE 
dread, doubt, regret. Off Bella, struggling to keep her 
facade up as she climbs into the back seat of the car..
.


BEGIN TITLES OVER:


3 BELLA'S POV OUT THE CAR WINDOW - SCOTTSDALE 
3


Bella, IPOD earbuds in her ears, gets a last glimpse of the 
sparkling malls, chic shoppers, manicured cactus gardens..
. 


PULL UP AND OUT OF THE CAR UNTIL WE'RE -
-



4.
4 EXT. ABOVE SCOTTSDALE (AERIAL SHOT) - DAY 
4


The McMansions get smaller as we SWEEP OVER the scorched 
landscape, baking under a hot sun. Beyond the housing 
developments SEE the rocky, dry desert, extending for miles..
. 


Rise HIGHER, and higher still, until finally we're suspended
within the bright, perfect, blue SKY, with only an occasional 
cloud..
. 


Slowly, the clouds start getting more numerous, thicker, darker..
. 
until we're completely immersed in them... the sun disappearing.
Finally, we EMERGE from the clouds to find below 
-


5 EXT. WASHINGTON STATE - OLYMPIC PENINSULA (AERIAL SHOT)- DAY5


Nothing but deep, dark, green forests for miles. SWEEP DOWN, 
finding the eerily dramatic Lake Crescent. Over it all hangs 
the mist from the ever-present cloudy grey sky. Everything 
is wet and green and drenched in shade..
. 


FIND A TWO LANE HIGHWAY along which drives A POLICE 
CRUISER... PUSH IN on the cruiser until we reach 
-


THE PASSENGER SIDE WINDOW 


Bella looks out, taking in her gloomy new surroundings..
.


END TITLES.


6 INT. POLICE CRUISER - DAY - WAITING AT LIGHT 
6


Bella sits next to her uniformed father, police chief CHARLIE 
SWAN, 40's. Taciturn, introverted like Bella. Their strained 
silence contrasts Bella's relationship with her mother. Beat.


CHARLIE
Your hair's longer.


BELLA
I cut it since last time I saw you. 


CHARLIE
Guess it grew out again.


She just nods. Silence.


CHARLIE
How's your mom?


BELLA
Good. 


More silence. Yikes. They pass a SIGN: �The City Of Forks
Welcomes You - Pop. 3246.� Bella sighs. 



5.
7 EXT. FORKS, WASHINGTON - DAY 
7


As the cruiser drives through, Bella takes in this logging town 
-
every storefront has a wood carving. The Timber Museum's sign is
two loggers sawing a stump. The POLICE STATION is a small wooden 
building across from City Hall..
. 


8 EXT. CHARLIE'S HOUSE - DAY 
8


The cruiser pulls up to the old two-story house. A woodshed full 
of firewood. There's a small boat in the garage, fishing gear, an
old buoy. Bella climbs out... home.


9 INT. CHARLIE'S HOUSE - DAY 
9


Bella and Charlie carry in her bags. The house isn't stylish
(the only new thing here is a Flat Screen T.V.), but it's
comfortable, lived-in. Lots of fishing memorabilia; photos 
of Charlie fishing with Quileute Indian BILLY BLACK. 


Handmade cards to �Daddy� and photos of Bella. She winces at
herself, age 7, in a tutu, sitting stubbornly on the ground. 


CHARLIE


I put Grandpa's old desk in your 


room. And I cleared some shelves 


in the bathroom. 


BELLA
(grimacing)
That's right. One bathroom.


Bella's eye lands on a PHOTO of a much younger Charlie and
Rene, on vacation, beaming with love. 


CHARLIE
I'll just put these up in your room 
-


BELLA
I can do it 
-


They both reach for the bags, bumping one another awkwardly. 
Bella backs off, letting Charlie carry the bags upstairs.


10 INT. BELLA'S ROOM - DAY 10


An antique rolltop desk sits in a corner. The room is filled with 
childhood remnants that have seen better days. As she unpacks her 
CD case, loneliness finally overwhelms her. She sits heavily on 
the edge of the bed, tears threatening..
. 


Then we hear a HONK outside. Bella runs across the hall and looks 
out the window to see 
-


11 OUTSIDE - A FADED RED TRUCK, CIRCA 1960 pulls up... 11



6.
EXT. CHARLIE'S HOUSE - DAY


Bella exits to find Charlie greeting the driver, JACOB BLACK, 
16, Quileute Indian, amiable with long black hair, and hints of 
childish roundness in his face. The two of them help Jacob's
father, BILLY BLACK (from the photos), into a wheelchair. 


CHARLIE
Bella, you remember Billy Black. 


BILLY
Glad you're finally here. Charlie 
hasn't shut up about it since you 
told him you were coming. 


CHARLIE
Keep exaggerating, I'll wheel you 
down the hill. 


BILLY
Right after I ram you in the ankles.


Billy takes several rolls at Charlie, who dodges. Jacob shakes 
his head at their two fathers as he shyly approaches Bella.


JACOB
I'm Jacob. We made mud pies 
together when we were little kids. 


BELLA
Yeah... I think I remember..
.
(re: the dads)
Are they always like this?


JACOB
It's getting worse with old age.


Charlie then pats the hood of the truck, addressing Bella 
-


CHARLIE
So what do you think of your 
homecoming gift?


BELLA
No way. The truck is for me?


CHARLIE
Just bought it off Billy, here. 


JACOB
I rebuilt the engine and -
-


BELLA
It's perfect!



7.
She beams. It's the first genuine smile we've seen on her.
She rushes to the truck. Jacob eagerly joins her. 


JACOB
Okay, so you gotta double pump the 
clutch when you shift, but -
-


He hands her the keys as she climbs in.


BELLA
Maybe I can give you a ride to school.


JACOB
I go to school on the reservation.


BELLA
Too bad. Would've been nice to 
know at least one person. 


As she starts up the truck we MATCH CUT 
-


12 EXT. FORKS HIGH SCHOOL - BELLA'S TRUCK - DAY 12


Loud, belching and turning heads as Bella parks, mortified. All 
eyes are on her as she climbs out of her truck and steps in 
a 
PUDDLE, soaking her sneakers. She slinks toward school, as we 
begin 
-


13 INT. HIGH SCHOOL - A SERIES OF SHOTS - DAY 13


-- Bella (never without her IPOD) makes her way thru kids who 
stare openly; a few brave ones say hi. They're all talking 
about her. This is her hell. 
-- Bella wanders the walkways looking for room numbers, lost. 
-- Constant stares at Bella, the outsider..
.
SERIES ENDS when a sweet, nerd-cute, motor mouth boy, ERIC, 
appears in her path. 


ERIC
You're Isabella Swan, the new girl. Hi. 
I'm Eric. The eyes and ears of this 
place. Anything you need. Tour guide, 
lunch date, shoulder to cry on.


Bella just looks at him. Is he for real?


BELLA
I'm kind of the �suffer in silence� type.


ERIC
Good headline for your feature 
-
I'm on the paper, and you're news, 
baby, front page.



8.
BELLA
I -- no, I'm not news -- I'm, seriously, 
not at all 
-


ERIC
Whoa, chillax. No feature.


BELLA


(relieved)
Would you mind just pointing me 
toward Mr. Varner's class?


He leads her away, enjoying the attentive stares, as she cringes 
from them 
-


ERIC
You've missed a lot of the semester, 
but I can hook you up - tutor, cliff 
notes, medical excuse..
. 


INT. GYM - DAY 14


The boys' basketball team runs drills on half the basketball
court. A girls' volleyball game occupies the other half.


Bella, in gym clothes, avoids the volleyball like it's
radioactive. An energetic, athletic team captain, JESSICA, 
motivates the players.


JESSICA
Block it, Chloe! Yeah! Good attack! 


Unfortunately, the volleyball heads toward Bella. She closes 
her eyes and flails at it, SMACKING it. It flies off court 
-


-- and beans a basketball player in the head. He is MIKE 
NEWTON, good looking, affable, with blond spiky hair. 


MIKE 
Ow!


BELLA
(hurries to him, 


embarrassed)
Are you alright? I warned them not 
to make me play.


MIKE
It's only a flesh wound.


Mike grins and she smiles, relieved. A BELL RINGS, class over. 


MIKE
You're Isabella, right? 



9.
BELLA
Just Bella. 


MIKE
I'm Mike. Newton.


He looks at her a second too long, clearly taken by her -
-
Suddenly, Jessica appears, stepping between them. Subtle, 
but possessive as she nudges Mike.


JESSICA
She's got a great spike, doesn't 
she? 


(to Bella)
So, you're from Arizona, right? 
Aren't people supposed to be tan 
down there?


BELLA
That's why they kicked me out.


Mike laughs, and because he does, Jessica does. Bella just 
feels uncomfortable with the attention..
.


15 INT. CAFETERIA - DAY 15


FOLLOW Bella, Mike and Jessica as they carry their trays to 
a 
table. Eric appears, and squishes into a seat next to Bella. 


ERIC
Mike, you met my home girl Bella. 


MIKE
Your home girl?


JESSICA


(to Bella)
It's first grade all over again, 
and you're the shiny new toy.


Bella smiles awkwardly. Suddenly, a FLASHBULB blinds Bella. 
She looks up at the photographer, ANGELA, Jessica's sweet, 
low key, insecure friend. 


ANGELA
Sorry, needed a candid for the feature 
-


ERIC
Feature's dead, Angela. Don't bring it 
up again.


(to Bella)
I got your back, baby.



10.
ANGELA


(disappointed)
Guess we'll just run another editorial on 
teen drinking. 


BELLA
Sorry. There's always eating disorders, 
or Speedo padding on the swim team 
-


ANGELA
-- Wait, that's a good one..
.


But Bella's attention is now riveted to 
-


BELLA'S POV - THE DOUBLE DOORS OF THE CAFETERIA 


They swing open as four of the most astounding people Bella's
ever seen enter (IN SLOW MOTION): THE CULLENS. Two guys, two 
girls, all chalky pale, purplish shadows under their eyes..
. 
and all devastatingly beautiful. 


They move through the room with effortless grace, and take a seat 
at a table furthest from Bella's. Bella leans over to Jessica and
Angela.


BELLA
Who are they?


ANGELA
The Cullens. 


Jessica leans in, swinging into gossip mode.


JESSICA
Doctor and Mrs. Cullen's foster 
kids. They all moved down here 
from Alaska two years ago. 


ANGELA
They kinda keep to themselves.


JESSICA
Because they're all together. 
Like, together together. The 
blonde girl, Rosalie, and the big 
dark-haired guy, Emmett..
.


ON ROSALIE, 18, long blonde hair, model beautiful, knows it. 
Alongside her is EMMETT, 17, big, brawny, like a weight 
lifter, but a playful glint in his eye. 


JESSICA
... they're a thing. I'm not even
sure that's legal.



11.
ANGELA
Jess, they're not actually related. 


JESSICA
But they live together. And the 
little dark haired girl, Alice, 
she's really weird..
. 


ON ALICE, 17, pixie-like, rail thin, light on her feet with short, 
black hair going in every direction. She hovers over, JASPER, 18, 
honey-blond hair, tall, lean, slightly tortured.


JESSICA
... she's with Jasper, the blonde 
who looks like he's in pain. 
I 
mean, Dr. Cullen's like this foster 
dad slash match maker. 


ANGELA
Maybe he'll adopt me.


Bella laughs, liking her... then sees the last Cullen to enter 
-


EDWARD, 17. Lanky, with untidy, bronze colored hair. He seems 
inwardly turned, mysterious. More boyish than the others. But 
the most striking of all. Bella can't take her eyes off him.


BELLA
Who's he?


JESSICA
That's Edward Cullen.


Suddenly, Edward looks over, as if he heard Jessica from 
across the room. His eyes meet Bella's. But he seems..
. 
confused. Bella quickly looks away. 


JESSICA
He's totally gorgeous, obviously. 
But apparently, no one here is good 
enough for him. Like I care. 


(she obviously does)
Anyway, don't waste your time. 


BELLA
I wasn't planning on it.


But Bella can't help but peek at Edward again. He's staring
at her outright now, with a slightly frustrated expression 
that unnerves Bella. She hides behind her hair.


16 INT. BIOLOGY CLASS - DAY 16


A room of black-topped lab tables. Two to a table. Bella 
and Mike enter. 



12.
Mike takes his seat and points her toward MR. MOLINA, 
Birkenstocked, enthusiastic science teacher at the head of 
the class. As Bella moves to the teacher with her class 
slip, she notes 
-


EDWARD -- his back to her, sitting at a front table. But as 
she passes Edward's table..
.


SLOW MOTION -- the breeze she creates when she passes lifts 
a 
piece of paper next to Edward. We're still on his back as he
inhales --then abruptly stiffens. He grabs onto the edge of 
the table, crumbling it slightly. No one notices. 


Mr. Molina takes Bella's class slip. 


MR. MOLINA
Welcome, Ms. Swan. Follow along as 
best you can till you get caught 
up. 


Mr. Molina gestures to the only empty seat... next to Edward. 
But as Bella approaches, she's taken aback when 
-


ON EDWARD'S FACE -he slowly looks up at her, his eyes coal
black with repulsion, fury. If looks could literally kill..
.


Bella knocks someone's book bag off their chair. Replaces it,
mumbling an apology. Then slinks reluctantly into her seat. 
Edward jerks away from her to the extreme edge of his chair. 


MR. MOLINA


(to the class, animated)


Today we'll be observing the behavior 


of planaria, a.k.a flatworms.


As Mr. Molina distributes two petri dishes per table 
-


MR. MOLINA
We're going to cut them in half, 
then watch them regenerate into two 
separate worms..
. 


Bella glances at Edward who averts his face, holding a hand over 
his nose as if he smells something horrible. 


Bella, shrinking, subtly sniffs the air, smells nothing. 
Then she sniffs her hair. It's fine. She's perplexed. Mr.
Molina hands Edward two petri dishes.


MR. MOLINA
... Yes, folks, zombie worms! They 
just won't die.


Edward takes a dish, then slides the second one across the 
table to Bella as if she had Ebola. She takes her dish, and 
makes a dark curtain of her hair between them. 



13.
She can see EDWARD'S HANDS under the table. Clenched into
fists. Off Bella, utterly baffled, and deeply insecure..
.


17 INT. HIGH SCHOOL - HALLWAY - DAY 17


-- as the BELL RINGS, Edward bolts out the door. Other kids 
and Bella exit a moment later. Bella looks down the hall; 
he's gone. 


18 INT. ADMINISTRATION OFFICE - DAY 18


Bella enters, but nearly turns and leaves when she sees 
-


EDWARD sweet-talking the enchanted female ADMINISTRATOR, 
40's. He doesn't see Bella enter.


EDWARD


There must be something open sixth 


period. Physics? Biochem?


ADMINISTRATOR


No, every class is full. I'm 


afraid you'll have to stay in 


biology. I'm so sorry. 


Bella blanches. The Administrator sees her and gestures for 
her to wait a minute. 


But Edward suddenly straightens as if sensing Bella. He slowly 
turns to glare at her with piercing, hate-filled eyes. She backs 
to the wall, hugging herself, suddenly chilled... with fear. 


EDWARD
(to the Administrator)
I'll just... endure it. 


He strides out the door. Off Bella..
. 


19 EXT. HIGH SCHOOL - DAY 19


Edward climbs into a shiny new silver Volvo with the Cullens,
while Bella, upset, hurries to her truck. The many eyes still 
watching her add insult to injury. ... Finally, she reaches 
-


20 INT. BELLA'S TRUCK (CONTINUOUS) 20


-- and closes the door. Her eyes well... but she fights it, 
getting mad. 


BELLA
Jerk.


As she tries to start the car, choking the engine, we begin to 
hear a MAN'S RAGGED, FRIGHTENED BREATH 
-


SMASH TO:



14.
21 ECU ON A SECURITY GUARD - IN THE DARKNESS 21


Extremely tight on his terrified FACE, sweat dripping, breathing 
in short gasps, trying desperately not to make a sound. INCLUDE 
-


22 INT. GRISHAM MILL - LATE AFTERNOON 22


--He's crouched in a dark corner. But then he sees a SHADOW
move blindingly fast past him. He jerks around, then another 
SHADOW flies past, too fast to follow. He BOLTS!


He runs up a flight of stairs, harsh lights from the exterior of 
the mill striating him. He moves as fast as humanly possible 
-


UNKNOWN POV - ON THE SECURITY GUARD FROM SEVERAL FLOORS BELOW


UNKNOWN POV charges after him at an INHUMAN SPEED through this 
maze of pillars and walkways. We dodge skull-crushing beams, 
LEAP from one floor up to the next, up ladders, scaffolding, 
beams, up, and up, getting closer and closer to 
-


THE SECURITY GUARD


-- who desperately runs for his life, looking over his shoulder 
with terror. UNKNOWN POV is closing in on him, but then he 
BOLTS out a door 
-


23 EXT. GRISHAM MILL (CONTINUOUS) - LATE AFTERNOON 23


-- The guard BURSTS OUT onto a stair landing, but loses his 
footing and TRIPS, breaking through the rail and pitching 
over the side, into the air 
-


-- and stops, hovering mid-air, a yard from the landing. 
A 
HAND grips his shirt, then YANKS him out of the air and out 
of frame with incredible strength. His guttural SCREAM is 
choked short as BLOOD SPRAYS THE LANDING..
.


24 INT. FORKS COFFEE SHOP - LATE AFTERNOON 24


ON A TOP SIRLOIN STEAK as it is set in front of Charlie. He 
shares a table with Bella. INCLUDE the waitress, CORA, 30's.
She beams at Bella as she sets a plate of cod in front of her.


Several LOGGERS at the counter offer Bella welcoming smiles. She 
shrinks in her seat at the attention. Charlie's oblivious.


CORA


Can't get over how grown up you 


are. And so gorgeous. 


Bella glances at Charlie, who keeps his eyes on his steak. 
A 
bearded, hippy logger, WAYLON FORGE, 50, appears behind Cora, 
leaning over her shoulder to Bella 
-



15.
WAYLON
�Member me, honey? I was Santa one year.


CHARLIE
Waylon, she hasn't had a Christmas 
here since she was four.


WAYLON
Bet I made an impression, though. 


CHARLIE
You always do. 


CORA
Let the girl eat her cod, Waylon. 


(to Bella)
When you're done, I'll bring your 
favorite - berry cobbler. Remember? 
Your dad still has it. Every Thursday.


BELLA
(doesn't remember at
all)
That'd be great, thank you.


Cora shoos Waylon away. Left alone now, Charlie and Bella 
both reach for the salt, knock hands. Charlie goes for the 
ketchup instead. Silence as they eat. 


A burst of LAUGHTER from a nearby happy FAMILY only serves to 
emphasize their discomfort. Bella tries to bridge the gap.


BELLA
So... you eat here every night?


CHARLIE
Easier than washing dishes.


BELLA
I can cook.


He looks up, as if confused by the concept.


BELLA
I do the cooking at home - in Phoenix. 
Mom's not great in the kitchen.


CHARLIE
I remember..
. 


They both laugh -- recalling an especially bad dinner. 


CHARLIE
How was school? Meet anyone?



16.
BELLA
A few people... Do you know the 
Cullen family?


CHARLIE
(looks up sharply)
Are people talking about them again?


BELLA
No... well, a little.


CHARLIE
Just �cause they're newcomers. We're 
lucky to have a surgeon like Dr. 
Cullen at our podunk hospital. Lucky 
his wife wanted to live in a small 
town. Lucky his kids aren't like 
a 
lot of the hell-raisers around here.


BELLA
... Okay.


CHARLIE
I just don't like narrow
mindedness. 


And he returns to his food. Silence. 


25 INT. BELLA'S ROOM - NIGHT 25


Bella looks out at the fog as she talks on the phone. 


RENE (O.S.
)
If spring training goes well, we could 
be living in Florida permanently. 


TELEPHONE OPERATOR (O.S.)
Please insert 25 cents to continue.


BELLA
Mom, where's your cell?


INTERCUT WITH:


26 EXT. GAS STATION/GARAGE - NIGHT 26


Rene talks on a pay phone, her dead cell phone in her hand. 
In the b.g., Phil and an Attendant work on the Subaru engine. 


RENE
Ok, I didn't lose my power cord. It 
ran away. Screaming. I literally 
repel technology now.



17.
Bella smiles, missing her mom. Rene feeds the phone 
quarters. 


RENE


Now, tell me more about your 


school, baby. What are the kids 


like? Are there any cute guys? 


Are they being nice to you?


BELLA


(a beat, lying)


They've all been really..
. 


welcoming.


PUSH IN ON BELLA'S FACE, getting mad all over again as..
.


FLASH POP TO -EDWARD'S FACE, HIS COAL BLACK EYES, THE FURY..
.


SMASH TO:


27 EXT. HIGH SCHOOL - MORNING (BEFORE SCHOOL) 27


ON BELLA, sitting atop a table, an open book in her lap. But her 
eyes are on the arriving kids, and the parking lot as they pull 
in. She's waiting for Edward.


Jessica, Angela, Mike and Eric kick around a soccerball 
nearby. They wave Bella to join them but she smiles, 
declining... and returns to watching for Edward. Her face 
tells us she's ready for a confrontation. 


28 INT. BIOLOGY CLASS - SAME DAY 28


Bella strides in... but stops, surprised to find her lab 
table empty. Off Bella, frustrated..
.


BEGIN A SERIES OF SCENES OVER SEVERAL DAYS:


29 INT. CAFETERIA - DIFFERENT DAY 29


Bella sits with Jessica and Angela who watch a YouTube video 
on their phone. Bella gives it a cursory look, but is 
focused on the Cullen table --only four of them. Edward's
seat is empty..
. 


30 INT. GIRLS BATHROOM - DIFFERENT DAY 30


Bella washes her hands, then looks up at the mirror, startled to 
find Rosalie and Alice behind her. They study Bella, Rosalie 
with chillingly cold eyes, Alice with curiosity. Bella, uneasy, 
hurries out.


31 EXT. FORKS HIGH SCHOOL - DIFFERENT DAY 31


Bella exits with Angela, Mike, Jessica and Eric, becoming a part 
of this circle. 



18.
She now only glances at Rosalie's car, a red M3 BMW, as it drives
past, noting, again, four Cullens, no Edward. Bella returns to 
her friends, finally forgetting about him..
.


SERIES OF SCENES ENDS as we go to 
-
32 INT. CHARLIE'S HOUSE - LIVING ROOM - MORNING 32
It's neater, rearranged more attractively. Clearly, Bella's
given it her touch. She sweeps through, folding Charlie's
fleece jacket, straightening up. She grabs her book bag 
-
BELLA
Dad, I'm heading out.
33 EXT. CHARLIE'S HOUSE (CONTINUOUS) - MORNING 33
ON BELLA'S FACE as she opens the door and stops, dismay
filling her. It's pouring down rain --the yard is full of
puddles, some frozen. Bella shivers, wraps her coat tight.
BELLA
Great. 
WHIP PAN to the driveway as Charlie pulls in -driving her 
truck. 
BELLA
Dad, I can drive myself to school.


As she walks down the steps, she doesn't realize, something's 
watching her -
-
UNKNOWN POV - FROM THE TREES 
--tracking Bella's every move as she slips and falls on 
a


patch of ice -
-
BACK ON BELLA - fallen on her ass. Charlie climbs out of the 
truck, helps her up. 
CHARLIE
You okay, Bells?
BELLA
Ice doesn't help the uncoordinated.


CHARLIE
That's why I got you new tires. 
She looks over at the truck -- yep, four new tires.
CHARLIE


The other ones were nearly bald. 



19.
BELLA
You got me new tires. No one's 
ever done that before.


Charlie looks at her, confused.


BELLA
I mean... nothing.


He clearly doesn't get it as heads toward his Cruiser.


CHARLIE
I'll be late for dinner. I'm heading 
down to Mason County. A security guard 
at the Grisham Mill got killed by some 
kind of animal..
.


UNKNOWN POV - ON BELLA AND CHARLIE, as he speaks..
.


BELLA
An animal?


CHARLIE
You're not in Phoenix any more, 
honey. They've been hunting it for 
a week with no luck. Thought I'd 
lend a hand.


BELLA
Be careful.


CHARLIE
Always am.


BACK ON BELLA..
. 


BELLA
And thank you. For the tires.


He sees emotion in her eyes. Doesn't understand it, but nods,
heads inside. Bella looks at the tires again, oddly moved..
.


34 OMITTED 34


35 INT. BIOLOGY CLASS/HALLWAY - DAY 35


Rain beats on the roof as Eric walks Bella into class. She 
brushes water off her coat as he chats her up.


ERIC
... and yeah, prom committee is 
a 
chick thing, but I gotta cover it 
for the paper anyway, and they need 
a guy to help choose the music -
-
So I need your play list 
-



20.
Bella is about to respond when Mike comes up behind her.


MIKE
Come on, Arizona. Give it up for 
the rain.


And he shakes his wet baseball cap onto Bella's head.


BELLA
Terrific. 


She heads toward her seat, brushing off her hair. But she 
freezes when she sees --Edward. 


Bella straightens, girding herself. Then strides to the 
table, and confidently drops her books down, ready to address 
him. But he looks up at her 
-


EDWARD
Hello.


Bella stops. Stunned. He is direct, precise, as if every 
word is an effort for him. 


EDWARD
I didn't have a chance to introduce 
myself last week. My name is 
Edward Cullen. 


She's too shocked that he's talking to her to answer.


EDWARD
(prompting)
... You're Bella.


BELLA
I'm... yes. 


Feeling like an idiot, she quickly sits. He abruptly moves to 
the extreme edge of his seat. She's even more baffled now.


MR. MOLINA


(to the class)
Onion root tip cells! That's 
what's on your slides. Separate 
and label them into the phases of 
mitosis. The first partners to get 
it right, win... the golden onion! 


He excitedly holds up a spray painted onion. Everyone just 
looks at him. He's disappointed by their apathy.


MR. MOLINA
Come on, people. Tick tock.



21.
Everyone sets to work. Edward pushes the microscope to 
Bella, keeping his distance, his voice controlled.


EDWARD
Ladies first. 


She grabs the microscope defensively and snaps the first slide 
in, adjusting the lens. She's curt as she addresses him.


BELLA
You've been gone.


EDWARD
Out of town. For personal reasons.


She glances at him but he just leans far away, his face 
tight. She looks back into the microscope.


BELLA
Prophase. 


She begins to remove the slide. 


EDWARD
May I look?


She slides him the microscope. He glances through the lens.


EDWARD
Prophase.


BELLA
(muttering)
Like I said.


He writes it on the worksheet. Then he takes a breath, as if 
trying calm himself, and turns to her with enormous effort.


EDWARD
Enjoying the rain?


BELLA
Seriously? You're asking me about the 
weather?


EDWARD
It appears.


BELLA
No. I don't like the cold. Or the 
wet. Or the gray. Or parkas. Or 
turtle necks. 


Is that a smile playing on his lips? For the first time, he 
seems more intrigued than agonized. He studies her. She still 
can't tell if he despises her or not. It's infuriating.



22.
BELLA


What?


He shakes his head and turns to the microscope, switching out 


the slides. She looks at him. And keeps looking..
. 


BELLA'S POV - ECU ON EDWARD'S FACE


His cheekbones, his lips. So perfect, like a sculpture..
.
EDWARD


Anaphase. 
She snaps out of it. Covers with a dry look. 
BELLA 
May I? 

(she looks through the 
lens)
Anaphase.


EDWARD
Like I said.


She glances at him, and this time sees a smirk. She simply 
holds out her hand for another slide.


EDWARD


(handing her the slide)
If you hate cold and rain, why move to 
the wettest place in the continental U.S.


BELLA
It's complicated.


EDWARD
I think I can keep up.


He actually seems interested. She looks into the microscope as 
-


BELLA
My mother remarried. 


EDWARD
Very complex. So you don't like him.


BELLA
Phil is fine. Young for her, but 
nice enough.


(re: the slide)
Interphase.


CUT ON THE SCHOOL BELL:



23.
36 INT. HIGH SCHOOL - HALLWAY - MOMENTS LATER 36


Bella exits holding the golden onion, and practically runs 
into Edward, who's directly in front of her. 


EDWARD


Why didn't you stay with your mom 


and stepdad?


He waits for her answer, studying her, as if trying to decipher 
her. She's drawn in by his attention, oddly compelled.


BELLA


Alright, Phil's a minor league 


baseball player, so he travels 
a 


lot. My mother stayed home with me 


but it made her unhappy. So 
I 


decided to spend time with my 


father.


EDWARD
But now you're unhappy. 


BELLA
No... I -- I just..
.


Bella turns away -- embarrassed, vulnerable. 


EDWARD


I'm just trying to figure you out. 


You're very hard to read.


He's clearly trying to read her now... their eyes meet again.
But now she looks more closely at him.


BELLA
Did you get contacts? 


EDWARD
... no.


BELLA


Your eyes were black before, now 


they're this golden brown or 
-


EDWARD
It's just the fluorescents.


He abruptly turns and walks away. As he does, Bella notes -
-
HIS HANDS clenched into tight fists. Off Bella, utterly 
bewildered, both intrigued and frustrated.


37 EXT. HIGH SCHOOL - PARKING LOT - DAY 37


The rain has stopped, but the parking lot is full of water 
and patches of black ice. 



24.
Shivering, Bella heads for her truck, carrying the onion, 
carefully navigating the icy puddles. As she reaches her 
truck, she looks across the lot 


EDWARD stands by his silver Volvo with his siblings, about to 
climb in. A moment as their eyes meet... then he looks toward the 
sound of a high pitched SCREECH, that quickly grows LOUDER..
. 


Bella turns to see a VAN -- skidding on the ice, careening out of 
control, heading directly for her. TIME suddenly fractures, 
compressing to stillness, then exploding in bursts of speed as 
-


-- THE FACES OF THE STUDENTS - in shock, seeing what's coming.
--THE VAN DRIVER'S FACE -TYLER, desperately trying to gain
control, then shielding his face.
-- EDWARD'S FACE - looking at Bella with horror..
. 


THE VAN is about to hit Bella's truck, with her standing in 
between, when suddenly, something knocks Bella down, pinning 
her to the ground. She looks up - Edward is on top of her. 


The world around them FREEZES -- in this fraction of 
a 
second, their proximity is overwhelming, electrifying. He 
breathes in her scent, she takes in his flawless face..
.


Abruptly, we BLAST BACK TO SPEED as several things happen so 
quickly, we, and Bella, are unsure what's going on:


-- THE VAN SMASHES into the back of Bella's truck 
-
-- Then SPINS around, once again careening toward her and 
Edward, then suddenly 
-
--EDWARD'S HANDS are creating a deep dent in the side of the
van's body as it shudders to a stop, a foot from Bella. 
-- Edward literally pushes the van away.


Then silence. A long beat, void of any sound, as Bella looks at 
Edward, trying to absorb what just happened. Edward's fear for
her is still alive on his face. She starts to speak but..
.


THE SCREAMING begins, yelling, calls for help. People leap to 
Tyler's aid, run to Bella and Edward. Bella SEES the onion on the
ground, smashed as she would have been. As everyone sweeps in, 
Edward moves into the b.g. Mike and Eric run to Bella 
-


MIKE ERIC


Are you okay!? Are you What happened!? Did anyone 


hurt?! see what happened?
!


Amid the chaos, Bella sees EDWARD'S SIBLINGS looking at
Edward. But they show no hint of concern for his safety. 
Instead, they look at him with disapproval... and fury. 


38 INT. HOSPITAL - TREATMENT AREA - DAY 38


The double doors BURST open as Charlie runs in, face white 
with terror. He spots 
-



25.
BELLA - sitting on a gurney, the E.R. DOCTOR looking into her 
eyes with a pen light. On the next gurney over, Tyler, the 
van's driver, lies with a mild head wound. Charlie rushes up.


CHARLIE
Bells. Are you alright?


BELLA
I'm fine, dad. Calm down.


TYLER
I'm so sorry, Bella. I tried to stop.


BELLA
It's okay, Tyler.


CHARLIE
It sure as hell is not okay.


BELLA
Dad, it's not his fault-


CHARLIE 
(stern, cutting her off)
We nearly lost you.


BELLA
But you didn't.


He'd hug her, if that was who he, or who she was. Instead,
he glares at Tyler.


CHARLIE
You can kiss your license goodbye.


DR. CULLEN (O.S.
)
I heard the Chief's daughter was here.


They look up as DR. CARLISLE CULLEN, mid 30's, approaches, blond,
movie star handsome. His face is kind, but pale, tired. 


CHARLIE
Good. Dr. Cullen. 


DR. CULLEN
(to E.R. Doctor)
I've got this one, Jackie.


The E.R. Doctor hands Dr. Cullen the chart, exits. Dr. Cullen 
reviews her chart, then feels the back of her head as..
.



26.
DR. CULLEN
You have a nice knot growing back 
there, but your x-rays show no 
indication of concussion. 


TYLER
I'm so sorry, Bella. I'm really 
-


Charlie abruptly pulls the curtain between them. 


BELLA
It would have been a lot worse if Edward 
hadn't knocked me out of the way.


CHARLIE
Edward? Your boy?


Dr. Cullen quickly looks back at the chart. Bella's 
intuition flickers, sensing he knows something. She presses.


BELLA
It was amazing he got to me so 
fast. He was nowhere near me.


DR. CULLEN
(smiles)
As long as you're safe. 


INT. HOSPITAL - RECEPTION - DAY 39


Charlie and Bella exit the treatment area.


CHARLIE
I just have to sign some paperwork. 
You better call your mom.


BELLA
You told her?! She's probably freaking.


He shrugs and hurries off. Bella shakes her head, pulls out her 
cell phone. Is about to dial, but then sees down the hall..
.


BELLA'S POV - EDWARD, ROSALIE, AND DR. CULLEN


Rosalie is clearly furious at Edward who stands his ground. 
Dr. Cullen plays intermediary. 


ROSALIE
This isn't just about you, it's about 
all of us -
-


Dr. Cullen sees Bella and stops Rosalie 
-


DR. CULLEN
Let's take this in my office.



27.
Rosalie glares at Edward as she goes off with Dr. Cullen. Edward 
adopts a nonchalant air as Bella approaches, determined.


BELLA
Can I talk to you for a moment?
(off his nod)
How did you get over to me so quickly? 


EDWARD
I was standing right next to you.


BELLA
You were next to your car, across 
the lot.


He steps closer to her. His expression turns icy hard. 


EDWARD


No, I wasn't.


She won't be bullied. Steps closer to him.


BELLA
Yes. You were. 


EDWARD
You're confused. You hit your head. 


BELLA
I know what I saw.


EDWARD
And what, exactly, was that?


BELLA
You stopped that van. You pushed
it away.


EDWARD
No one will believe that. 


BELLA
I wasn't planning to tell anyone. 


This registers with Edward. They're inches from each other,
the tension thick. 


BELLA
I just want to know the truth.


EDWARD
Can't you just thank me and get 
over it?


BELLA


Thank you.



28.
A long beat as they look at each other, angry, defensive... and 
without a doubt, attracted. 


EDWARD
You're not going to let it go, are you?


BELLA
No.


EDWARD
(turns, walks away)
Then I hope you enjoy disappointment.


BELLA
Why did you even bother?


He stops, a beat. Looks back at her, unexpectedly vulnerable. 


EDWARD
... I don't know.


And he keeps walking. Off Bella, confused, frustratingly 
attracted, and absolutely determined to find out the truth.


BELLA (V.O.
)
That was the first night I dreamed 
of Edward Cullen..
.


40 DREAM SEQUENCE - UNDERWATER 40


Bella swims, white skin aglow, hair floating weightlessly, 
sensually... suddenly, something BLASTS past her. She spins. 
It's gone. Something BLASTS behind her. She spins again -
to find herself face to face with 
-


EDWARD ... Bella reaches for him, but he abruptly springs 
backward, just out of reach. 


SMASH TO:


41 INT. BELLA'S ROOM - ON BELLA - NIGHT 41


-as she bolts up awake. In that split second, in the darkness, 
she SEES Edward, watching her. She SNAPS on the light -- the 
room is empty. Was she dreaming? 
42 EXT. HIGH SCHOOL - PARKING LOT - DAY 42


Bella stands in the exact spot of the accident. Behind her 
on the lawn, several CLASSES congregate, gathering for 
a 
field trip. Mr. Molina is in charge.


MR. MOLINA
Make sure I get your permission slips.



29.
PUSH IN ON BELLA'S FACE staring at the skid marks on the
pavement..
.


FLASH POP TO THE VAN REELING RIGHT FOR HER 
-


FLASH POP TO EDWARD'S HANDS STOPPING THE VAN 
-


FLASH POP TO EDWARD ON TOP OF HER, THE PROXIMITY, ELECTRICITY 
-


BACK ON BELLA, blushing at the memory. Then she SEES Edward 
arrive with Alice and Jasper. She watches him, barely noticing as 
Mike trots up to her -
-


MIKE 
(ala Dr. Frankenstein)
Look! You're moving. You're ALIVE!


BELLA
... Yeah, false alarm..
.


MIKE
Actually, I'm glad you're not dead 
�cause - well, that would suck, plus 
I 
wanted to ask you - even though it's, 
like, a month away..
.


But Bella's distracted by Edward. Mike's VOICE DIPS as..
.


BELLA'S POV - ACROSS THE LAWN


Edward, head down, is in quiet conference with Jasper and Alice. 
Abruptly, he looks up, as if listening to her and Mike, though 
he's too far away to hear. Bella quickly refocuses on Mike.


MIKE
So what do you think?
(off her blank look)
You want to go? To prom. With me.


BELLA
(realizing, horrified)
Prom. As in dance. I, uh - have to go 


-somewhere. To Jacksonville. Yeah.
MIKE
You can't go another weekend? 


BELLA
Non-refundable ticket. Maybe you 
should ask Jessica. 


Mike follows Bella's eyes way across the lawn to Jessica.
She smiles at them -- Suddenly Edward crosses in front of 
Jessica. He seems to be smirking..
.



30.
43 INT. COMMUNITY COLLEGE GREENHOUSE - FIELD TRIP - DAY 43


Mr. Molina and a Tour Guide lead several dozen kids through 
the greenhouse. Bella keeps an eye on Edward who's up ahead
with Alice and Jasper. Mr. Molina demonstrates the compost 
machine as the students mess around. 


MR. MOLINA
...c'mon, Eric, stuff that compost 
down deep... that's it..
.
(the machine gurgles and spins)
... now Tyler, take a big steaming 
cup of �compost tea.� This is 
recycling at its most basic level -
-
hey, don't drink that!


When Bella sees Edward pause by an ancient staghorn fern, 
alone, she takes a breath for courage and strides up to him. 


BELLA
Hello, Edward.


He glances at her, merely nodding. We notice his FISTS clench, 
and unclench. Bella looks at him, appalled by his rudeness.


BELLA
Really?


No response. She turns, starts to walk away. 


EDWARD 
What's in Jacksonville?


She turns back to him.


BELLA
How did you know about that? 


EDWARD
You didn't answer my question.


BELLA
You haven't answered any of mine. 
You won't even say hello.


EDWARD
Hello.


BELLA
And how did you stop that van?


EDWARD
Adrenaline rush. Very common. 
Google it. 



31.
BELLA


(not buying it)
Floridians. That's what's in 
Jacksonville.


She turns to storm off but she stumbles over the irrigation 
hose. Edward steadies her, catching her scent -- still so 
powerful... He clenches his jaw.


EDWARD
It helps if you actually watch
where you put your feet.


Insulted, she keeps moving. He keeps pace, serious now. 


EDWARD
I know I've been rude, but it's for 
the best.


She just looks at him like he's crazy. He walks away as
Jessica suddenly rushes up.


JESSICA
Guess who just asked me to prom!


Bella smiles.


JESSICA
I totally thought Mike was going to 
ask you, Bella. Is it gonna be 
weird? 


BELLA
No way. Zero weirdness. You guys 
are great together.


JESSICA
I know, right?


Giddy, Jessica rushes to catch up with Angela. Bella heads 
out the door that leads to 
-


EXT. COMMUNITY COLLEGE GREENHOUSE - THE BUSES (CONTINUOUS)44


--where everyone's looking at the COMPOST �WORM BOX�, grossing
each other out with the slimy creatures. As Bella backs away, 
Edward steps up.


EDWARD
Bella, it would be better if we 
weren't friends. 


BELLA


(wounded)
Too bad you didn't figure that out 
earlier. 


(MORE)



32.
BELLA (cont'd)
You could have let the van crush me 
and saved yourself all this regret.


EDWARD
(snapping, angry)
You think I regret saving you?


BELLA
I know you do.


EDWARD
(furious)
You don't know anything.


His harshness stings her. Suddenly, Alice appears at 
Edward's side. She eyes Bella with curiosity.


ALICE
The bus is leaving.
(to Bella)
Hi. Will you be riding with us?


EDWARD
No. Our bus is full.


He purposefully walks Alice away. But he glances back at 
Bella with, is that... remorse? She doesn't see it.


INT. CHARLIE'S HOUSE - KITCHEN - EVENING 45


Bella enters, throws down her book bag and coat, still angry. 
She starts upstairs but Charlie enters from the kitchen.


CHARLIE
Your mother called. Again.


BELLA
Your fault, for telling her about 
the accident.


CHARLIE
She always did know how to worry. 


(hint of sadness)
But... she's changed, too. She 
seems happy. Phil sounds all 
right.


BELLA
He is.


She continues upstairs, glancing at her parents' WEDDING PHOTO.
Off Bella's FACE, we MATCH CUT -
-



33.
46 INT. HIGH SCHOOL - CAFETERIA - ON BELLA'S FACE - DAY 46


-- as she pushes through the doors. She glances over at the 
CULLEN TABLE, Edward with his siblings. He doesn't look at her.
Anger and determination set in again as Bella joins Eric, 
Jessica, Mike and Angela. She drops her book bag on a seat 
-


ERIC
La Push, baby. You in?


BELLA
Should I know what that means?


MIKE
La Push beach, down on the Quileute 
rez. We're all going after school. 
Big swell coming in. 


ERIC
And I don't just surf the internet.


JESSICA
Eric, you stood up once. On a foam 
board.


ANGELA
There's whale watching, too. Come with. 


ERIC
La Push, baby.


BELLA
I'll go if you stop saying that. 


47 THE SALAD BAR STATION - MINUTES LATER 47


Bella artfully designs an architectural salad. As she 
reaches for an APPLE, Edward is suddenly next to her 
-


EDWARD 
(charmed)
Edible art..
.


Startled, she fumbles and drops the apple -- Edward catches 
it with his foot, hackeysack style, then bounces it back into 
his hand, the red of the apple, stark against his pale skin. 
He presents it to her with small smile.


BELLA
Thanks... but your mood swings are 
giving me whiplash.


EDWARD
I said it would be better if we weren't 
friends, not that I didn't want to be. 



34.
BELLA
What does that even mean?


EDWARD
It means if you were smart, you'd 
avoid me.


Edward inadvertently glances at his four inhumanly beautiful 
siblings, who wait for him, expectantly, at their table. 


She notes her own, very human friends monitoring this 
conversation from their table. Mike glowers jealously.


BELLA
So let's say, for argument's sake, 
that I'm not smart. Would you talk 
to me? Tell me the truth? 


EDWARD
Probably not. I'd rather hear your 
theories.


BELLA
Okay... how �bout radioactive 
spiders? Kryptonite?


EDWARD
(levels his gaze, 


challenging)
You're talking about superheroes. 
What if I'm not a hero? What if 
I'm a bad guy?


BELLA
(beat, looking closer at him)
No. I don't believe that. You're 
not bad. You can be a jerk, but 
it's like this... mask. To keep 
people away. 


He's taken aback by her honesty, her insight, drawn in by her..
.


BELLA
Look, why don't we just - hang out. 
Like... come to the beach with us. 
It'll be fun - sand fleas, wind burn, 
salt water stinging your eyes..
.


EDWARD
(small smile, considering 
it)
Which beach?


BELLA
La Push. 



35.
His smile lessens almost imperceptibly. 


BELLA
Is something wrong with that beach?


Edward glances over at Mike - the two exchange cold looks.


EDWARD
It's just a little crowded.


Off Bella, as Edward walks away..
.


48 EXT. LA PUSH BEACH - DAY 48


It's freezing, but Mike, Tyler, Jessica and others suit up
for a surf. Eric hangs with them. Bella wanders by the 
driftwood with Angela, who takes photographs. 


ANGELA
I keep thinking Eric's going to ask me 
to prom, then he just... doesn't.


BELLA
You could ask him. 
(off Angela's flustered 


look)
Take control. You're a strong 
independent woman.


ANGELA
I am?


JACOB (O.S.
)
Bella!


She looks up to see three Quileute boys approaching the group; 
Jacob Black, and SAM and EMBRY. Bella smiles at Jacob. 


BELLA
Guys, this is Jacob. Are you 
stalking me?


JACOB
You're on my rez, remember? You 
surfing?


BELLA
Definitely not. 


JESSICA
(teasing)
Keep her company. Her date bailed. 


ERIC
What date?



36.
JESSICA
She invited Edward. 


BELLA
(embarrassed)
To be polite.


ANGELA
I think it's nice she invited him. 
No one ever does.


MIKE
Because Cullen's a freak.


SAM
You got that right.


BELLA
You know them?


SAM
(sharply)
The Cullens don't come here.


Jacob shoots Sam a look, shakes his head. Bella registers this. 
A beat, then she casually pulls Jacob aside 
-


BELLA
You want to go look at tide pools?


She offers an awkwardly flirtatious smile. He grins, 
infatuated. As they head toward the water..
.


EXT. LA PUSH BEACH - LATER DAY 49


Bella and Jacob wander near the water, looking out to sea for 
whales. The surfers are out on the waves. She nudges him, 
continuing her attempt at flirtation..
.


BELLA
So, what did your friend mean about 
the Cullens not coming here?


JACOB
Oops. Caught that, huh? 


He moves closer to her, lowering his voice for mock-secrecy. 


JACOB
I'm not supposed to say anything.


Bella gives him her best alluring smile.


BELLA
I can keep a secret..
.



37.
JACOB


(laughing) 
It's just an old scary story. Did 
you know the Quileutes are 
supposedly descended from wolves?


BELLA
Like fur, fangs ... doggy breath?


Jacob chuckles. Bella smiles and prompts him to continue..
.


BELLA
So the legend about the Cullens is..
.


JACOB
Well, they're supposedly descended 
from this, like..
.


(in a spooky voice)


�enemy clan.� ... But they 
claimed to be different, so we made 
a treaty with them. 


BELLA
Didn't they just move here?


JACOB
Or just moved back.


BELLA
Riiiight. So what was this treaty?


JACOB


(whispering)
If they promised to stay off Quileute 
lands, we wouldn't expose what they 
really were to the pale-faces..
. 


Jacob pauses dramatically --Bella shivers. 


GIRL (O.S)
AAAAAAAAGH!!!!!!
!


Bella JUMPS at the bloodcurdling scream, as Angela runs past, 
chased by Eric waving a dead crustacean. Jacob smirks and 
starts back to the group.


BELLA
Wait... what were they really? 


JACOB 
(laughing)
It's just a story, Bella.


Off Bella, with more unanswered questions..
.



38.
50 EXT. SHACK COMMUNITY ON THE RIVER - LATE AFTERNOON 50


A collection of haphazard shacks and boat docks, connected by 
wood plank sidewalks. FIND Waylon Forge (the hippy logger 
who used to play Santa Claus) scraping paint off his boat, 
swigging a pint as he listens to his prehistoric Walkman. 


His old DOG lies next to him as the sounds of the forest and 
river chirp and buzz. Waylon sings along to his Walkman..
. 


Suddenly, the sounds of nature abruptly SILENCE themselves. The 
dog raises his head, starts to GROWL. Waylon doesn't notice.


STAY ON WAYLON, singing, working... until he looks up and 
realizes the dog's gone.


WAYLON
Jerry?


Waylon pulls off the headphones. WHISTLES. No dog. Waylon 
walks up a walkway... then sees a DOG LEG, sticking out from 
under a bush. 


WAYLON
Come on, Jerry, you old mutt..
.


He pulls at the leg. It's detached. He reels back, stumbling 
onto his boat, frantically untying the line and pushing out 
-


ON THE WATER - Waylon floats, breath short, listening acutely. 


WAYLON'S POV -ON THE WOODS lining the river. Ominous
darkness. A NOISE. He jerks around. Nothing. Then 
suddenly, his boat ROCKS violently; he spins 
-


A MAN - now stands on the bow. JAMES, 30, pale white. 
A 
vampire. But his eyes, unlike the Cullens, are a deep, 
sinister BURGUNDY, and absolutely lethal. His catlike 
movements are always on the edge of a crouch.


WAYLON
H-how did you do that?


JAMES
Always the same inane questions..
.


Waylon turns but a woman LEAPS onto the bow --it's VICTORIA,
26, chaotic red hair filled with leaves from the woods. 
Terrified, Waylon spins around to see LAURENT, 28, glossy 
black hair, olive skin, lounging on his boat seat. All three 
Nomads wear frayed clothes, and all three are bare foot.


JAMES
�What do you want?
�



39.
VICTORIA
�Why are you doing this?
� 


LAURENT
(sighs, slight French 
accent)
... James, must we?


JAMES
The question should be, �will it hurt?
�


Victoria grins sadistically. Then with lightening fast 
speed, the three of them VIOLENTLY LUNGE 
-


SMASH TO BLACK:


51 FADE IN ON EDWARD'S FACE AGAINST BLACKNESS 51


SNAPSHOTS of his eyes, his cheekbones, his lips..
.


52 INT. BELLA'S ROOM - ON HER FACE - MORNING 52


As she sits in front of her computer, lost in thought. She 
shakes herself out of it and types into her search engine 
�Quileute legends, Olympic Peninsula.� An AD pops up,
�Thunderbird & Whale Book Store, Port Angeles.� Bella,
intrigued, clicks on it..
. 


53 EXT. FORKS HIGH SCHOOL - SUNNY DAY 53


The sun has come out and so has the skin. Kids are in shorts 
though it's still barely sixty degrees. Everyone eats lunch 
outdoors. Bella searches the crowd for Edward.


JESSICA (O.S.
)
He's not here.


She looks down to find Jessica sitting on the grass.


JESSICA


Whenever the weather's nice, the 


Cullens disappear. 


BELLA
They just... ditch?


JESSICA


No, Dr. and Mrs. Cullen yank �em 


out for hiking and camping and 


stuff. I tried the idea out on my 


parents. Not even close. 


Bella registers this as Angela suddenly jumps on them.



40.
ANGELA
I'm going to the prom with Eric! 
I 
just asked him, I took control! 


(hugs Bella)
Are you sure you have to go out of town?


BELLA
It's a family thing.


JESSICA
Oh my God, we need to hit the 
stores in Port Angeles before the 
dresses get cleaned out. 


BELLA
Port Angeles?..
. 
(a plan forming in her 
mind)
Can I go with you guys? 


ANGELA
Thank God. We need your opinion.


Off Bella, that's not really what she had in mind..
.


54 INT. BOUTIQUE, PORT ANGELES -ON BELLA'S FACE- AFTERNOON 54


-- antsy, distracted, as Jessica and Angela try on dresses. 
Bella pulls a Mapquest print-out from her purse -- it reads, 
�Thunderbird and Whale Book Store.� Jessica flounces out of
the changing room, posing provocatively.


JESSICA
I think this halter makes my boobs 
look big. What do you think, 
Bella?


Outside the window, a group of rowdy FRAT BOYS head toward 
a 
bar. Two of them stare at Jessica in her low-cut dress. 
Embarrassed, she turns back to Bella. 


JESSICA
Bella?


BELLA
(absently)
It looks great. 


JESSICA
You said that about the last five 
dresses.


ANGELA 
(empathetic)
You're not very good at this, are you?



41.
BELLA


Maybe I should just go check out the 


book store and meet you at the 


restaurant later.


ANGELA
You sure?


Bella nods, heads out. Jessica's looks in the mirror again.


JESSICA


She was right about this halter, 


though. It does look great.


55 OMITTED 55


56 OMITTED 56


57 EXT. THUNDERBIRD AND WHALE BOOKSTORE/STREETS - NIGHT 57


Bella exits, thumbing through a BOOK she just bought. She 
heads down the sidewalk, but then hears FOOTSTEPS behind her. 
She turns, doesn't see anyone. She puts the book in her
shoulder bag and continues.


UNKNOWN POV - ON BELLA -someone's following her. She looks 
around, changing course to cut across a parking lot. Unknown 
POV gets closer... and closer, until she reaches 
-


58 EXT. WAREHOUSE AT END OF PARKING LOT - NIGHT 58


Isolated. Bella, breath short, scared, turns around just as -
-
TWO MEN emerge from the shadows, not vampires, but the Frat 
Boys, really wasted now. 


FRAT BOY #
1
Wanna beer?


She looks to her left; the other TWO GUYS are there. She's
cornered. She takes her purse from around her shoulder.


BELLA
Look, just take my bag.


FRAT BOY #
2
We don't want your bag.


She takes a defensive stance and wraps the strap around her 
wrist to use her purse as a mace. They chortle derisively. 
But when Frat Boy #1 comes near, she swings it, hits him in 
the groin. The BOOK in her bag doubles him over. The other 
three laugh, and start to close in. But suddenly 
-



HEADLIGHTS blind them. A silver Volvo screeches up. The 
Frat Boys dive out of the way. The passenger-side door 
opens. It's Edward. She's too stunned to even move.



42.
EDWARD
Get in.


She finally does. But Frat Boy #2 jumps into the game and 
rushes Edward's side of the car 
-


Edward SCREECHES to a halt and is out of the car and facing 
Frat Boy #2 so fast, neither the Frat Boys, nor Bella, see it. 
Nor does Bella see Edward's GLARE, so chilling, so animalistic
in its fury that Frat Boy #2, scared, instinctively backs off. 
As Edward climbs back into the car, Bella just stares at him.


59 INT. EDWARD'S CAR - DRIVING - NIGHT 59


Bella continues to stare. She sees that he's seething with anger,
hands gripping the steering wheel, jaw clenched.


BELLA
What -- no, how did you find -- 
?


EDWARD
(through gritted teeth)
I should go back and rip their heads off.


BELLA
No. Bad idea. 


EDWARD
You don't know the vile, repulsive 
things they were thinking.


BELLA
And you do?


EDWARD
(covering)
Not hard to guess. 


60 EXT. WATERFALL RESTAURANT - FRONT ENTRANCE - NIGHT 60


Jessica and Angela exit the restaurant as Bella approaches.


ANGELA
Where were you!? We left you a message.


JESSICA
We waited, but we were starving 
-


Then they see Edward behind her, climbing out of his car. 
They freeze, agog. He's composed now, making an effort to be
charming. And they are charmed.


EDWARD
Sorry I kept Bella from dinner. We 
ran into each other and got talking. 



43.
JESSICA
I - we - understand. We were 
just... leaving, so 
-


The two girls start to go. Bella is forced to go with them. 


BELLA
Okay, well. Thank you.


She starts to follow the girls. Edward is torn, then abruptly 
-


EDWARD


(abruptly)
Maybe I should make sure Bella gets 
something to eat.


(off Bella's surprised 


look)
... If you'd like. Then I could 
drive you back myself.


ANGELA
That's so... thoughtful.


JESSICA
Really thoughtful.


BELLA
(debates, then decides)
I could eat.


As he guides her off, the two girls share a look, and 
a 
noiseless scream of excitement. 


EXT. WATERFALL RESTAURANT - DINING PATIO - NIGHT 61


Bella and Edward sit on the deck. A dramatic waterfall 
shimmers behind them.


A waitress places a steaming plate of mesquite roasted salmon 
in front of Bella and nothing in front of Edward. She exits.


BELLA
You're not eating?


EDWARD
I'm on a special diet.


BELLA
Like South Beach?


EDWARD
Not exactly.


She looks at him curiously as she takes a bite.



44.
BELLA
So how �bout some answers?


EDWARD
Yes, no. To get to the other side, 
and 1 point 772453851.


BELLA
I didn't ask for the square root of pi.


EDWARD
You knew that?


BELLA
How did you know where I was? 


EDWARD
I didn't.


She shakes her head, frustrated, and turns to go inside -
-


EDWARD
(stops her, sincerely)
Don't go.


He seems torn by some internal dilemma. Then finally..
.


BELLA
Were you following me?


EDWARD
I feel very protective of you. 


BELLA
So that's a yes?


EDWARD
Yes, I followed you. I tried to 
keep my distance...until you needed 
help.


BELLA
(putting everything together)
You said before... That you heard 
what those guys were thinking..
. 
Can you... read minds?


EDWARD


(shrugs)
I'm thinking of getting a nine-
hundred number.


BELLA


(trying to grasp)
Alright, so you read minds... What am 
I thinking? Wait -- okay now, go.



45.
EDWARD
I have no idea. I can read every 
mind in there, except yours. 


(points at people 
inside)
Work, sex, money, sex, sex, boyfriend 
-
(points at Bella)
Nothing. It's quite frustrating. 


BELLA
Why, what's wrong with me?


EDWARD
I tell you I read minds and you think 
there's something wrong with you?


He smiles, charmed by her. But his smile fades, that torn 
look returns. He holds onto the rail, looking out. 


BELLA
What is it?


EDWARD
I... don't have the strength to 
stay away from you anymore. 


She's surprised. And thrilled.


BELLA
Edward, you don't have to.


He's drawn in by her encouraging gaze... but he closes his
eyes a beat, and turns back to the water.


EDWARD
(almost to himself)
This is wrong. 


BELLA
Edward 
-


EDWARD
You're cold. We should go.


He walks away before she can ask any more questions..
.


62 EXT. ROAD - NIGHT 62


Edward's Volvo speeds along the two lane highway.


63 INT. EDWARD'S VOLVO - NIGHT 63


Bella glances at Edward, might ask him more questions but he seems 
to be wrestling with his own thoughts. Finally..
. 



46.
BELLA
I think I'm warm enough now. 


She reaches for the heater dial, he does as well -- their 
hands TOUCH. And hold a moment too long. An electric 
current connecting them.


BELLA
Your hand, it's still freezing cold.


He pulls his hand away, but she keeps looking at it... then 
her attention shifts outside to FLASHING POLICE LIGHTS. As 
they drive past the FORKS POLICE STATION, a sheriff's car
pulls away. Charlie's cruiser is parked out front. 


BELLA


(concerned)
Dad's here late. Something must 
have happened.


EXT./INT. FORKS - POLICE STATION (CONTINUOUS) - NIGHT 64


The Volvo pulls up. Bella and Edward climb out. Edward then 
sees a second car next to the cruiser. 


EDWARD
That's my father's car. What's he -- 
?


EDWARD AND BELLA'S POV: INSIDE THE DARKENED POLICE STATION


In a pool of light, a distressed Charlie and Dr. Cullen study 
photographs and evidence. As they wrap up their discussion, 
Dr. Cullen puts a sympathetic hand on Charlie's shoulder,
then exits the police station looking grim. 


EDWARD
Carlisle. What happened?


DR. CULLEN
Waylon Forge was found in the woods 
out near his place. I just 
examined the body.


Edward darkens. Bella is horrified.


BELLA
He died? How? 


DR. CULLEN
Animal attack. 


BELLA
The same kind that killed the security 
guard down in Mason?


Edward and Dr. Cullen trade a look, subtle, but Bella catches it.



47.
DR. CULLEN
Most likely.


BELLA
So it's getting closer to town.


EDWARD
Waylon lived all the way down on 
Queets River. 75 miles south.


BELLA
But that's 
-


DR. CULLEN
(with a kind, reassuring 


smile)
Bella, you should go inside. 
Waylon was your father's friend.


She goes to the door, but looks back to see them conferring 
quietly, gravely. Clearly, there's more to this.


65 INT. POLICE STATION - NIGHT 65


Bella enters to find a distressed Charlie studying evidence, 
photos, maps --trying to make sense of Waylon's death.
Deputies come and go in the background. Bella approaches 
Charlie. He looks up.


BELLA
Dad, I'm sorry about Waylon.


CHARLIE
Known him going on thirty years. 


He's obviously torn up. Bella isn't quite sure what to do.
And so puts a comforting hand on his shoulder. A beat..
. 


Then Charlie squeezes her hand. It's the first physical
affection we've seen between them. And it threatens to evoke
even more emotion in Charlie. So he tamps it down, and rises, 
then projects a confident manner. 


CHARLIE
We'll get to the bottom of this, Bella. 
But in the meantime..
.


As an ambulance pulls up outside, he opens a drawer, finds 
out a cannister of PEPPER SPRAY. 


CHARLIE
... I want you to have this.


BELLA
That's probably not a good 
-



48.
CHARLIE
It'll give me some peace of mind. 


She sees he needs this, and allows him to put it into her 
purse. 


As Charlie goes to get his coat, Bella steps outside to SEE 
-


A66 EXT. POLICE STATION - NIGHT - BELLA'S POV A66


Two Attendants hoist a metal gurney into an ambulance. On it, 
Waylon's dead, white, bloody bare FEET peek out from under 
a
sheet, resting at a disturbingly unnatural angle. Off Bella, 
chilled..
.


SMASH TO:


FLASH POP TO EDWARD'S BLACK EYES


FLASH POP TO EDWARD'S COLD WHITE HAND.


FLASH POP TO THE FIVE CULLENS, SLOW MOTION, beautiful and white.


FLASH POP TO WAYLON'S TWISTED WHITE FEET


INT. BELLA'S ROOM - ON BELLA - NIGHT 66


-- as she turns on the LIGHT. She hears a SNAP! outside the 
window. She rises, digs into her purse for the PEPPER SPRAY 
Charlie gave her, and goes to the window. She looks out -
-
all she sees is the wind blowing hard. But she's rattled.


She closes the curtains, then reaches for the BOOK she bought 
earlier. She thumbs through, laying the pepper spray within 
reach. 


INSERT THE BOOK, �QUILEUTE FOLK STORIES AND ART.
�


As she leafs through we see PHOTOS of ancient, carved MASKS. 
Comical, menacing, haunting... then she stops on a photo of 
a 
white mask with black eyes and a row of sharp teeth. THE 
INSCRIPTION reads, �The Cold One.
�


Bella quickly goes to her computer and Googles �Cold One � -
several beer ads appear. Frustrated, she closes the pop-ups, 
revealing a link to: �The Cold One: Apotamkin� -
-


INTERCUT BETWEEN BELLA AND THE COMPUTER SCREEN


Several PICTURES begin loading: the seductive Apotamkin with his 
ice-blue skin, devouring his victims in tapestries, engravings, 
paintings. Creatures beautiful and horrific. Craven, skeletal 
demons attacking villages; perfectly sculpted predators, luring 
innocent maidens... it's all murder, blood, sexuality.


THEN SEVERAL WORDS LEAP OUT in quick succession: 



49.
-- �Speed.� �Strength.� �Cold skinned.� �Immortal... 
� 
Then finally: �Blood drinker.
� 


And we LAND ON A PICTURE OF A HANDSOME MAN BITING A WOMAN'S
WHITE NECK..
. 


FLASH POP TO THE SAME PICTURE AS IT MOMENTARILY COMES ALIVE, 
BUT NOW IT'S EDWARD BITING BELLA'S NECK, BLOOD DRIPPING 
-


BACK ON BELLA - she reels back from the computer in utter 
disbelief.
BELLA
... it's not possible..
. 
Off BELLA'S FACE, struggling to make sense of it all..
.
MATCH CUT:


67 
EXT. SCHOOL -LAWN -ON BELLA'S FACE -DAWN --THICK FOG 67
She stands in the center of the deserted, green lawn. Her 
expression tells us she's still reeling with disbelief. STAY 
ON HER FACE, TIME LAPSING AS: 


The bell rings and students exit class, rushing past Bella as 
she stands still, waiting..
. 


BELLA'S POV - EDWARD AND HIS SIBLINGS
-- cross the lawn, heading to class. Edward sees Bella, sees 
the intensity on her face. He stops. 


She walks to him, eyes meeting his... her look says, we have 
to talk... and she continues directly past him, into the dark 
forest that borders the school. 


He watches her disappear in the trees, then takes a step to 
follow. Jasper moves in front of him, Rosalie grabs his arm. 
ROSALIE
Edward, don't go.
But Alice gently removes Rosalie's hand from his arm.
ALICE
He's already there.


68 
EXT. FOREST - DAY 68
Bella stands amid the trees, waiting. Then the SOUNDS OF THE 
FOREST abruptly drop out. A predator is near. Edward 
appears behind her. She doesn't turn around. A beat.



50.
BELLA
You're impossibly fast. And strong. 
Your skin is pale-white, ice-cold. 
Your eyes change color. And 
sometimes you speak like... you're 
from a different time. 


(turns to face him now)
You never eat food, or drink, or 
come out in the sunlight. And you 
said no to the beach trip only after 
you heard where it was. Because of 
the treaty. 


This last registers with him. She steps closer to him.


BELLA
How old are you?


EDWARD
Seventeen.


BELLA
How long have you been seventeen?


A long beat as we begin to CIRCLE THEM. He sees he can't hide
anymore. Honesty is an enormous risk, but he has to take it.


EDWARD
... A while.


She inhales. She knew, but it's still shocking. We CIRCLE
THEM FASTER 
-


BELLA
I know what the Cold Ones are. 
What you are. 


EDWARD
Say it. Out loud. Say it.


All sound suddenly DROPS OUT. We hear only her whisper..
.


BELLA
... Vampire


They seem to hover in momentary stasis, him utterly exposed, her 
reality utterly rocked. 


EDWARD
Are you afraid?


BELLA
No. 



51.
EDWARD


(angry)
Then ask me the most basic 
question: what do we eat?


BELLA
You won't hurt me. You're different.


EDWARD
You think you know me?


He glares at her. She holds her ground. Suddenly, he takes 
her by the hand. Starts walking. 


BELLA
Where are we going?


EDWARD
Up the mountain. Out of the cloud 
bank. You need to see what 
I 
really am. What I look like in the 
harsh light of the sun. 


BELLA
No! The sunlight will kill you.


EDWARD
Myth. You need to see the truth.


He pulls her but she stumbles. 


BELLA
Slow down.


Suddenly, he's right next to her.


EDWARD
Are you afraid? 


BELLA
No.


EDWARD
Then come with me. Someplace where 
no one can protect you. Where 
I 
could do what I've wanted to do from 
the first moment I met you. 


Their proximity is intense, riveting both of them. 


BELLA
I'm not afraid.


EDWARD


You should be.



52.
He abruptly and effortlessly scoops her up into his arms. 


EDWARD
Hold on.


Then he flings her onto his back... and starts running.


69 EXT. FOREST - RUNNING - DAY 69


As in the opening sequence, Edward races through the forest, dark 
trunks STROBING past as he picks up speed, faster and faster. 
Bella clings to his back as it seems he'll collide with the trees, 
but he avoids them with supernatural grace. It's frightening, 
nauseating, intoxicating. 


EDWARD
Are you afraid!
?


BELLA
No!


But she clings tighter. Terrified. They climb in altitude. 
Higher and higher, above the fog layer. Finally, up ahead 
-


THE FOREST'S EDGE fast approaches, a clearing is beyond. The
sunlight glows white hot beyond the trees... they're about to 
emerge from the shadowy darkness... but suddenly-


Bella finds herself sitting on the ground, against a tree. 
All is silent. She's dizzy, tries to regain her equilibrium. 
Then she realizes she's alone. 


BELLA
Edward? Where are you?


She rises, then steps just beyond the fringe of the ferns into 
-


70 EXT. A MEADOW (CONTINUOUS) - DAY 70


A perfect circle of swaying grass, wildflowers and buttery 
sunlight. HEAR a stream nearby. Bella looks around and finally 
sees 
-


EDWARD, his shirt open, standing nearby in the shade of some 
trees. He watches her cautiously. She takes a step toward 
him, but he holds up a hand. She waits. Finally, he takes 
a 
deep breath, and steps out of the shade 
-


EDWARD


This is why we don't show ourselves 


in sunlight..
. 


As the sun hits him... EDWARD'S SKIN literally sparkles as if 
embedded with thousands of tiny diamonds. He is magnificent, 
shimmering, like a statue carved from glittering crystal. He 
moves toward her. 



53.
EDWARD
This is what I am.


He nears, clearly expecting her to recoil, but..
. 


BELLA
You're... beautiful..
.


He realizes that she's in awe. She reaches to touch him, but 
he immediately backs into the shadows, his skin normal again. 


EDWARD


(appalled)
Beautiful? I'm a killer, Bella. 
This is the skin of a killer. 


His arm juts into A SHAFT OF LIGHT, sparkling again.


BELLA
I don't believe that.


EDWARD
Because you believe the lie. The 
camouflage. I'm the world's most 
dangerous predator. Everything 
about me invites you in - my voice, 
my face, even my smell. As if 
I 
need any of that..
.


He's suddenly BEHIND her --then IN FRONT of her --then by 
a
tree, DARTING so fast, we only see where he lands 
-


EDWARD
As if you could outrun me. As if 
you could fight me off.


He abruptly rips off a LARGE TREE LIMB, then THROWS it against 
a 
tree trunk with explosive force. 


Bella flinches, but holds her ground, unshakable. 


EDWARD
I'm designed to kill.


BELLA
I don't care.


EDWARD
I've killed people.


BELLA
It doesn't matter.



54.
EDWARD
I wanted to kill you. I've never
wanted a human's blood so much in 
my life. I'm dangerous to you.


BELLA
I trust you.


EDWARD
Don't.


BELLA
I trust you, Edward. I'm here.


She takes his hand. He reels at the warmth of her touch. 
She leans in, drawn to him, unaware that her THROAT is 
nearing his lips... then suddenly he's gone.


BELLA
Edward?


She looks over to FIND he's on the other side of the meadow, 
catching his breath.


EDWARD
You... took me by surprise. 
(collecting himself)
I don't know how to... do this.


He moves back toward her. Slowly. 


EDWARD
Me, and my family, we're different 
from others of our kind. We're not 
nomadic, we have a permanent home. 
We only hunt animals. We've 
learned to control our thirst..
. 


(shaking his head)
But you - your scent, it's like 
a 
drug to me... my own personal brand 
of heroin. 


BELLA
(realizing)
Oh... I thought you hated me when we met.


EDWARD
I did. For making me want you so badly. 
I'm still not sure I can control myself.


He reaches her again.


BELLA
I know you can.



55.
He's utterly vulnerable as he looks at her, searching her
face for clues.


EDWARD
I wish I could understand this 
thing you see in me. You look at 
me with those eyes..
. 


(frustrated)
I can't read your mind. Tell me 
what you're thinking.


BELLA
I'm afraid.


Stricken, he sinks gracefully to his knees in the grass.


EDWARD
(devastated)
Good. 


She sinks down in front of him.


BELLA
Not of that. I'm afraid... you'll 
disappear. That I'll lose you.


EDWARD


(amazed, elated)
You don't know how long I've looked 
for you.


They share a smile. Then he reaches toward her neck, 
pausing..
.


EDWARD
Be very still.


She does so. Exercising great control, he places his hand on 
her throat... it's so exposed, so vulnerable. The rush
between them is overwhelming. But Bella doesn't move.


He brushes his hand up her cheek. Then lowers it to her 
heart... Clouds float past the sun..
.


They're both overwhelmed, taking each other in.


EDWARD
And so the lion fell for the lamb.


BELLA
Stupid lamb.


EDWARD
Sick masochistic lion.



56.
CRANE UP on the two of them, laying together, as close as 
they dare... his hand to her heart..
.


DISSOLVE TO:


71 INT. BELLA'S ROOM - MORNING 71


CLOSE ON BELLA'S FACE. Still in bed. Thinking.


BELLA (V.O.
)
About three things I was absolutely 
positive. One, Edward was 
a 
vampire. 


She rises, goes to the mirror. Looks at herself, worry 
knitting her brow.


BELLA (V.O.
)
Two, there was a part of him that 
thirsted for my blood. And three..
.


As she moves past her window, something catches her eye, causing 
her to BANG into her desk. She looks back out..
. 


BELLA'S POV - THE DRIVEWAY


Edward leans against his car, looking up at her with a small 
smile. She beams at the sight of him. 


BELLA (V.O.
)
... I was falling, unconditionally 
and irrevocably, in love with him. 


72 OMITTED 72


73 EXT. OLYMPIC RAINFOREST - DAY (ANOTHER DAY) 73


Edward helps Bella balance-walk across an enormous fallen pine 
tree in the moss-covered forest. 


BELLA
How long have you been like this?


EDWARD
Since nineteen-eighteen. That's 
when Carlisle found me. 


She takes that in, it's a lot. But it stokes her curiosity.


BELLA
Where'd he find you?


EDWARD
In a hospital, dying of Spanish 
influenza. My parents had already died. 



57.
FLASHBACK to CHICAGO HOSPITAL, 1918 - NIGHT


BELLA (V.O.
)
What was it like?


EDWARD (V.O.
)
The word excruciating comes to 
mind. But what Carlisle did was 
much harder... not many of us have 
the restraint to do that. 


BELLA (V.O.
)
Didn't he just... bite?


EDWARD
Not just. Our bite contains venom. 
And once we taste blood, a sort of..
. 
frenzy begins. It's almost 
impossible to stop. 


BELLA (V.O.
)
But Carlisle did. 


EDWARD
First with me, then with his wife, 
Esme. He found her in a hospital, 
as well. The others followed.


BACK to PRESENT DAY


BELLA 
Does someone have to be dying to 
become like you?..
.


Their CONVERSATION CONTINUES as we go to 
-


74 EXT. RIVER'S EDGE - DAY (ANOTHER DAY) 74


They walk along a stunning coastline -- rugged black rocks, 
covered in bright green moss.


EDWARD
... No, that's just Carlisle. He 
would never do... this, to someone 
who had another choice. 


BELLA
So Carlisle's the reason why you 
hunt animals, instead of people. 


EDWARD
Not the only reason.


He stops, looks down at her, serious, with emotion..
.



58.
EDWARD
I don't want to be a monster.


She nods. Understands. He smiles.


EDWARD
We call ourselves vegetarians, by 
the way... For our kind, hunting 
animals is like living on tofu. It 
keeps you strong but isn't very 
satisfying. 


Then abruptly, he whips past Bella. She turns to see him standing 
on a large rock in the river.


BELLA
Show off.


EDWARD
It's not that impressive, really. 
Anyone in my family can do this.


BELLA
Can they all read minds, too? 


EDWARD
No, that's unique to me. But Alice can 
see the future. 


BELLA


(fishing)
Really? Bet she saw me coming 
a 
mile away.


She notes his change of mood as he slows, darkening.


EDWARD
Her visions are very subjective. 
The future can change.


He cuts off her questions by returning to shore, and 
continuing their walk..
.


75 EXT. CHARLIE'S HOUSE - TWILIGHT (ANOTHER DAY) 75


Water sprays from a hose as Bella and Edward wash her truck. 
A boom box PLAYS. He perches on top of the roof. 


EDWARD
Come to my house tomorrow. 


Bella looks up, aiming the hose badly - water ricochets off 
the cab and sprays in her face. He jumps down from the roof.


BELLA
Your house? With your family?



59.
He wipes down the dented front fender, then reaches under it 
and, with his bare hands, easily pops a large DENT out of the 
truck's body. She's too flustered to register it.


BELLA 
But... what if they don't like me?


EDWARD


(laughing heartily)
You're worried, not because you'll 
be in a houseful of vampires, but 
because you think they won't 
approve of you? 


BELLA
I'm glad I amuse you.


But then his laughter dies, as he hears something. 


BELLA
What is it?


EDWARD
A complication.


... as a BLACK CAR comes into view, and pulls up. 


EDWARD
I'll pick you up tomorrow.


He heads to his car, eying the passengers in 
-


EDWARD'S POV - INT. BLACK CAR


Jacob, with his father, Billy, who's expression is intense.
Anxious. SLOW MOTION as Edward locks eyes with Billy. Jacob 
looks questioningly at his father.


Bella watches Edward drive away, perturbed by the exchange. She 
forces a smile and goes to greet the visitors. Jacob sets up 
Billy's wheelchair and Billy climbs into it as 
-


BELLA
Come to visit your truck?


JACOB
Looks good. You got that dent out. 


BILLY
Actually, we came to visit your 
flat screen. First Mariners game 
of the season. Plus Jacob here 
kept bugging me to see you again.



60.
JACOB
(mortified)
Great, Dad. Thanks. 


Jacob shoots his father an irritated look, just as the POLICE 
CRUISER pulls up. Charlie climbs out, holding two six-packs. 


CHARLIE
Pale Ale.


BILLY
(holds up a brown paper 
BAG)
Harry Clearwater's homemade fish fry.


Charlie smiles, pleased. He clicks on the game as they all head 
inside 
-


BILLY
Any luck with the Waylon case?


CHARLIE


(darkening)
Found a footprint out at the crime 
scene today. A bare, human footprint. 


Billy seems disturbed but not surprised. Bella is horrified.


BELLA
A person did that?


JACOB
A crazy person, walking around 
barefoot this time of year.


CHARLIE
Spread the word out at the rez, will 
ya? Keep the kids out of the woods. 


BILLY
Will do. 
(directed at Bella)
Don't want no one else getting hurt.


Bella looks away from Billy, unnerved.


76 OMITTED 76


77 OMITTED 77


78 DREAM SEQUENCE - UNDERWATER 78


Bella floats near Edward, only their hands touching, but 
their bodies are nearing, so close, so sensual..
. 



61.
Suddenly, EDWARD IS YANKED DOWNWARD! Something has him, 
pulling him down..
. 
SMASH TO:


79 
INT. BELLA'S ROOM - ON BELLA - MORNING 79
-- as her eyes pop open... and relief sweeps over her as she 
realizes it was just a dream. But it haunts her..
.


80 
EXT. OLYMPIC PENINSULA - ROAD - DAY 80


AERIAL SHOT of the forest as we sweep over its lush green 
expanse, to FIND Edward's Volvo speeding along, very fast. 
The Volvo finally turns off the paved highway and onto a long 


serpentine dirt road. FOLLOW THE CAR until, finally, it 
reaches a small meadow, in the center of which sits 
-


81 
EXT. CULLEN HOUSE - DAY 81
A timeless graceful house. The Volvo pulls up and Bella 
climbs out, surprised.


BELLA
It's... wonderful.
EDWARD
You expected turrets, dungeons and moats? 
BELLA
No... not moats.
He takes her hand. She girds herself. They head inside.


82 
INT. CULLEN HOUSE - LIVING ROOM - DAY 82
Edward guides Bella into the large, bright house. Walls of glass 
look out on the river. Everything's open and white. Historical
objects are tastefully placed throughout. 


HEAR Verdi's �La Traviata: Libiamo ne' lieti calici� coming from
another room. Bella is enraptured.
BELLA
It's so light and open. 


EDWARD
Thanks to tinted windows... It's the one 
place we never have to hide.


We then notice CLANGING coming from the kitchen. Edward 
shakes his head.
EDWARD
I told them not to do this.



62.
83 INT. CULLEN HOUSE - KITCHEN - DAY 83


Verdi's opera BLASTS Bella and Edward who enter to find the
kitchen in full swing. Dr. Cullen, Emmett, Rosalie, and ESME 
prepare elaborate platters of Italian pastas and antipasti. 


Esme rolls out a pizza dough and fans tomatoes around it in an 
instant. Rosalie stirs a pot, disinterested. 


Esme sees Bella and stops, emanating maternal warmth. Her 
heart-shaped face and billows of hair are reminiscent of the 
silent-movie era. 


ESME


Bella. We're making Italiano for 


you. 


EDWARD


This is Esme, my mother for all 


intents and purposes. 


BELLA
Bon giorno?


ESME
Molto bene! 


DR. CULLEN


You've given us an excuse to use 


the kitchen for the first time. 


Hit pause..
.


PAN across brand new Williams-Sonoma cookware boxes to the 
corner --they're watching an ITALIAN COOKING SHOW on a TV.
Emmett hits the DVD remote control. 


ESME
I hope you're hungry.


BELLA
Oh, absolutely 
-


EDWARD
She already ate.


Bella shoots him a look, but something SHATTERS. Rosalie has 
thrown down a bowl and now strides out 
-


ROSALIE
Perfect.



63.
84 INT. LIVING ROOM (CONTINUOUS) - DAY 84


-- Bella exits behind Rosalie, trying to explain. The 
other's follow -

BELLA
I just assumed -- because you don't 
eat, you know..
.


ESME
Of course. That was very considerate 
of you.


EDWARD
(re: Rosalie)
Ignore her. I do.


ROSALIE
Yes, let's keep pretending this 
isn't dangerous for all of us. 


BELLA
I would never, ever tell anyone.


DR. CULLEN
(reassuring)
She knows that. 


EMMETT
The problem is, you two have gone 
public now, so..
.


ESME


Emmett.


ROSALIE
No, she should know.


(to Bella)
The entire family will be 
implicated if this ends badly. 


BELLA
... Badly?


This hangs in the air, uncomfortably. Edward can't look at her.


BELLA


(realizing)
Oh. Badly. Like, where I become 
a 
meal.


Emmett chokes back laughter. Edward grins. Wraps his arm 
around Bella. Even Esme has to chuckle.


Rosalie, exasperated, heads back into the kitchen. Emmett 
shrugs, goes after her.



64.
ALICE (O.S.
)
Hi, Bella!


ON THE BALCONY Alice leaps over the rail, holding a bouquet 
of wildflowers. Jasper follows her. She bounces forward to 
kiss Bella's cheek and hands Bella the wildflowers. 


ALICE


I'm Alice. You do smell good. 
EDWARD 
Alice. 
ALICE 

It's alright, Bella and I are going 
to be great friends. 


BELLA
(extending her hand)
And you're Jasper, right?


JASPER
Pleasure to meet you.


But he shies away from her hand. 


ALICE
(gently encouraging)
You won't hurt her, Jasper.


He isn't so sure. Edward takes Bella's hand instead.


EDWARD
I'll give you a tour of the house. 


ALICE
(with meaning)
I'll see you soon.


Edward shoots Alice a look, which Bella catches before he guides 
her up the stairs. As they ascend, Bella takes in the eclectic 
ART PIECES from around the world, Ethiopian crosses, Dresden 
China, Asian scrolls. They reach 
-


THE LANDING - to FIND a wall of dozens of artistically arrayed 
silk squares with tassels. Bella looks closer. 


BELLA
Graduation caps?


EDWARD
A private joke. We matriculate a lot.


BELLA
What a nightmare, repeating high school. 



65.
EDWARD
True, but the younger we start out in 
a 
new place, the longer we can stay there.


She shivers at the thought of it, as they continue on..
.


85 INT. EDWARD'S ROOM - DAY 85


EDWARD
... and this is my room.


Bella enters to find a wall of glass doors open to a deck, with 
the river beyond. The rest is floor to ceiling CD's, vinyl, 
8
track tapes, etc., with a sophisticated I-pod/stereo set up. 


BELLA
So you're obsessed with music. But..
.
(looking around)
No bed?


EDWARD
No sleep.


BELLA
Ever?


EDWARD
No nightmares, no drool, no 
snoring.


She considers this, as she runs a hand along a wall of CD's,
studying the titles.


EDWARD
Do you have any favorites?


BELLA
Depends. Alternative? Jazz? 
Sixties, seventies..
.


EDWARD
Ooh, she knows her music. Alright, 
nineties. Eighteen-nineties. Classical.


BELLA
I'd have to say... Debussy.


He looks at her, surprised, smiles. 


EDWARD
My favorite, too. 


Off their connection, he pulls out a CD and puts it on. 
A 
solo piano version of CLAIR DE LUNE begins to play.



66.
He moves to her, taking her hand, then he starts to turn her 
in a pirouette, dancing with her - but she breaks off and 
backs away.


BELLA
No dancing.


EDWARD
Ever? 


BELLA
No tripping, no falling, no derision. 


EDWARD
(mischievously)
I can always make you.


BELLA
You don't scare me.


EDWARD
You really shouldn't have said that.


He grins, a low GROWLING SOUNDS in the back of his throat. 
She laughs and backs out the door, onto 
-


86 EXT. EDWARD'S ROOM - DECK (CONTINUOUS) 86


-- Bella backs up to the rail. Edward appears in the 
doorway, shifting into a half-crouch, about to pounce. 


BELLA
Don't you dare -

Suddenly, she's airborne as he tackles her and they FLY OFF THE 
DECK... then she finds herself 
-


IN A TREE - in his arms. When she realizes where she is, she 
laughs, delighted. It's infectious, he laughs heartily, too..
.


CUT AWAY TO:


87 INT. CULLEN HOUSE - LIVING ROOM - SAME 87


Esme and Dr. Cullen look out the window. Edward's LAUGHTER
filters inside to them; Esme, in turn, smiles.


ESME
She's brought him to life.


DR. CULLEN
He's been alone too long... but how 
can it end well?


ESME
Alice has been wrong before.



67.
DR. CULLEN
Not often.


Esme turns to Dr. Cullen, gentle but absolutely firm.


ESME


Carlisle. Bella is what he wants. 


It will work out. Somehow. 


Dr. Cullen smiles at her with love, then takes her hand as 
they look back out the window..
.


EXT. TREE - SAME 88


Edward looks Bella in the eye. 


EDWARD
Trust me?


BELLA
In theory. 


EDWARD
Then close your eyes.


She does, warily. He grips her more firmly, then LEAPS them to 
another tree like a flying squirrel! Then, again, to the TOP of 
another tree. He easily gets a foothold, while holding Bella. 


EDWARD
Open.


She does... to the most astonishing bird's eye VIEW of the
valley, river, and the mountains beyond. CAMERA whirls around 
them allowing us a 360 degree view of their surroundings. Off 
Bella's intoxicated face..
.


CUT AWAY TO:


A89 EXT. HIGH SCHOOL - DAY A89


Jessica pops a volleyball in the air, doing practice serves. 
Angela takes a picture of her, then points her camera around, 
looking for another shot. Eric studies some fliers 
advertising the prom. 


JESSICA


Monte Carlo? That's our prom 


theme? 


ERIC
Gambling, tuxedos and -
-
(ala Sean Connery)
Bond. James -- ow!


-- as Jessica head-butts the ball which hits him in the face.



68.
ANGELA


Oh. My. God.
Angela, scanning for a shot, has frozen. Jessica and Eric 
SEE 
-


BELLA AND EDWARD 
-- arriving together. All eyes on campus are turning to 
them, filled with curiosity, jealousy, envy. 
BELLA
Everyone's staring.
EDWARD
Not that guy over -- yeah, he just 
looked.
Off his rakish, but reassuring smile..
.


89 
CLOSE ON A GERMAN SHEPHERD 89
Moving fast, tracking. INCLUDE CHARLIE holding the leash 
-
EXT. FOREST - DAY
--It's a hunting party, several dogs, half a dozen armed men.


CHARLIE
Guys, we got something 
-


The Deputies hurry to Charlie. They gather around 
-
A FOOTPRINT. The dogs start pulling them in a certain 
direction. As the posse takes off at a sprint 
-


UNKNOWN POV - ON CHARLIE, FROM A DISTANCE
We watch Charlie and the posse move away... REVERSE to find 
-
JAMES - ATOP A KNOLL, WATCHING THEM
Laurent stands next to him. Victoria jogs up.


VICTORIA
They took the bait. 


JAMES
By tomorrow they'll be half way to 
Winnipeg. 


Victoria lasciviously grabs James' shirt. Pulls him to her.
VICTORIA
I love when men chase me.



69.
He grins, then starts taking off her clothes. They pull each 
other toward the woods with carnal lust. It barely registers 
with Laurent, who continues to watch the posse with concern. 


90 EXT./INT. FORKS COFFEE SHOP - LATE AFTERNOON 90


Bella hurries toward the entrance, trying to keep the joy on her 
face in check... with minimal success. Outside the door, she 
passes Mike, hanging out with several of his basketball TEAMMATES.


MIKE
Yo, Arizona. So. You and Cullen.


She shrugs, non-committal, but can't entirely hide a smile,
as she hurries inside to Charlie's table and slides in.


BELLA
Sorry I'm late. Biology project. 


Cora sets a top sirloin steak in front of Charlie, and plate 
of seafood in front of Bella.


CHARLIE
Ordered you the seafood combo.


BELLA
Order one for yourself next time. 
You should cut back on the steak.


CHARLIE
I'm healthy as a horse.


CORA


(concerned)
Say Chief, boys want to know, you 
find anything down by Queets River 
today?


Charlie's aware of the LOGGERS at the counter listening, too.
He frames his answer carefully to keep everyone calm.


CHARLIE
The suspect's moving east. Kitsap 
County Sheriff is taking over from 
here. They're putting extra guys on.


CORA
Hope they catch him fast.


She moves off, with a measure of relief. Charlie and Bella 
pass each other the salt, butter for bread, etc., with an 
easy rhythm now. 


CHARLIE
Your friends are flagging you.



70.
She turns to see Mike and the guys horsing around outside, 
straws in their noses, making faces at her. She smiles.


CHARLIE
It's okay you wanna join them. I'm 
just gonna turn in early anyway.


BELLA
Yeah, me, too. 


CHARLIE
It's a Friday night. Go out. The 
Newton boy's got a big smile for 
you. Nice family, the Newtons.


BELLA
He's just a friend.


CHARLIE
None of the boys in town interest you?


BELLA
We're not really going to talk 
about boys, are we?


CHARLIE
Just... you should be around people. 
I leave you alone too much.


BELLA


(with genuine affection)
I've never minded being alone. Guess 
I'm a lot like my dad that way. 


Charlie smiles. These two have come a long way. Cora returns 
-


CORA
Berry cobbler, two forks.


She sets it between them. Off them, both reaching for forks..
.


91 INT. BELLA'S ROOM - NIGHT 91


Bella, dressed for bed, looks out the window as she talks on the 
phone with Rene. Bella's euphoria still lingers in her eyes..
.


BELLA
So spring training's going well?


INTERCUT WITH:


92 INT. CAFE - NIGHT 92


Rene talks on her cell. Phil is in the background, post-batting 
practice, chowing down with a couple of teammates.



71.
RENE
Phil's working hard. We're looking 
around for a house to rent, in case 
it becomes permanent. You'd like 
Jacksonville, baby. 


BELLA
Actually, Forks is kind of growing on me. 


RENE
(stops, knows there's 


more)
Could... a guy have something to do 
with that?


BELLA
(small smile)
Maybe..
.


RENE
Tell me everything! Jock? Indie? Bet 
he's smart. Is he smart?


BELLA
(trying to avoid lies)
Well... he is kind of a history buff.


-- this as she turns to find 
-


EDWARD LYING ON HER BED, smiling. She nearly drops the phone.


BELLA
I, uh... have to go.


RENE
No way, we gotta talk boys. Are 
you being safe?


Edward shoots her a look, he heard that. She's mortified.


BELLA
I'll call you later, Mom. 


STAY ON BELLA who hangs up.


BELLA
How did you get in here?


EDWARD
The window. As always.


BELLA
You've been here before?


EDWARD
What else is there to do at night? 



72.
She pushes him. He grabs her hand and playfully pulls her 
onto the bed, wrestling as 
-


BELLA
You're a peeping Tom! Perv!


EDWARD
Shh! The Chief will hear you!


But the electricity of their physical contact quickly overwhelms 
them, their laughter quieting. He studies her face.


EDWARD
I just... like watching over you. 


He raises his fingers to her lips, sending a thrill up her spine.


EDWARD
There's something I'd like to try. 


She nods, bedazzled by him. He takes her face in his hands, 
hesitates to test himself, then he softly kisses her..
. 


What neither of them is prepared for is her response. Her 
breath comes in a wild GASP. Her fingers knot in his hair, 
clutching him to her. Lips part as she breathes his scent..
.


Then his hands gently, but forcefully push her face back. She 
opens her eyes to see that his eyes are wild, his jaw clenched. 


BELLA
(mortified)
Oh... I'm... oh.


He relaxes slightly, looking at her blushing face.


EDWARD
I'm stronger than I thought. 


BELLA
Wish I could say the same. I'm so 
embarrassed.


EDWARD
Don't be. But we have to be careful.
(serious)
I can never lose control with you. Ever. 


She nods, then carefully lies on his chest. He wraps his arms 
around her. Off the two of them..
.


93 INT. CHARLIE'S HOUSE - LIVING ROOM - LATE AFTERNOON 93


Bella enters to find Charlie cleaning a rifle. He starts to 
say hello but she just blurts out -
-



73.
BELLA
I have a date with Edward Cullen.


He suddenly looks like he's having an aneurysm. 


CHARLIE
He's too old for you.


BELLA
We're both juniors. I thought you 
liked the Cullens. 


CHARLIE
And I thought you weren't interested in 
any of the boys in town. 


BELLA
Edward doesn't live �in town.� And 
it's in the early stage and -
-
whatever, he's outside right now.


CHARLIE
Now? He's out there?


BELLA
He wants to meet you. Officially. 


CHARLIE
Good.


He cocks the rifle in mock-seriousness.


BELLA
Be nice, okay? He's... important.


Charlie gives his daughter a reassuring nod... then she opens 
the door to REVEAL Edward in a parka and gloves. 


EDWARD
Chief Swan. I wanted to formally 
introduce myself. I'm Edward.


Edward extends his hand. Charlie takes it, but grunts 
a 
hello, resisting him.


EDWARD
I won't keep Bella out late 
tonight. We're just going to go 
play baseball with my family.


CHARLIE
Bella's going to play baseball?


Bella's equally surprised, but hides it.



74.
EDWARD
Yes, sir, that's the plan.


CHARLIE
Well. More power to you, I guess.


EDWARD
(looks him in the eyes)
She'll be safe with me, sir, I promise.


As Edward exits... Charlie holds Bella back.


CHARLIE
(sotto)
You got that pepper spray?


BELLA


Dad.


94 EXT. CHARLIE'S HOUSE - LATE AFTERNOON 94


Edward and Bella climb into a massive JEEP parked in the drive.


EDWARD


(amused)
Your father thinks you should go to 
an all-girl's school.


BELLA
No fair, reading Charlie's mind. 


As they climb in the Jeep, Bella notices a baseball bat 
-


BELLA
And since when do vampires like baseball? 


EDWARD
It's the American pastime. Plus, 
there's a thunderstorm coming. It's the 
only time we can play. You'll see why.


95 EXT. CLEARING IN WOODS - TWILIGHT 95


Storm clouds gather in the sky as Bella and Edward pull up in 
the Jeep. She takes in a rough baseball diamond, set into an 
enormous field in the lap of the Olympic peaks. 


Esme and Emmett come to greet Bella. 


ESME
Good thing you're here. We need 
a 
umpire. 


EMMETT
(big crooked grin)
She thinks we cheat.



75.
ESME
I know you cheat. Call �em as you 
see �em, Bella.


WHIP PAN to Alice on the Pitcher's Mound.


ALICE
It's time.


-- Just as a deep RUMBLE of thunder shakes the forest.


BEGIN MONTAGE - THE GAME


And it's extraordinary. Bella stays by Esme who plays 
catcher. Alice pitches with lightning-fast speed. Edward 
and Emmett take positions in the outfield. 


-- ROSALIE SMASHES the ball with the aluminum bat. It CRACKS 
like thunder -- and is followed directly by real THUNDER. 


BELLA
(to Esme)
Now I get why you need the thunder.


The ball SHOOTS like a meteor deep into the forest, rocketing 
through the trees. Edward disappears after it.


BELLA
That has to be a home run.


ESME
Edward's very fast.


Rosalie darts around the bases, almost a blur -- Edward races out 
of the forest with the ball and WHIPS it to home plate. WHAP! 
Esme catches it a millisecond before Rosalie slides in.


BELLA
Yer out?


Esme nods... Amazed, Bella watches as DR. CULLEN hits a line 
drive. Edward and Emmett race for the catch, DIVING 15 feet 
and COLLIDING with such might that it sounds like enormous 
boulders falling. They miss the ball -- Dr. Cullen is safe! 


JASPER WHACKS the next pitch -- deep into the forest. But 
before Edward can chase it, Alice suddenly GASPS. 


ALICE
Stop! I didn't see them..
. 


They all stop. Edward is immediately at Bella's side. The 
family instantly gathers at home plate. 


ALICE
They're traveling so quickly 
-



76.
ROSALIE
You said they left the county -
-


ALICE
They did, but then they heard us..
.
(looking at Edward)
And changed their minds.


EDWARD
(to Bella)
Put your hair down 
-


ROSALIE
Like that'll help. I could smell 
her from across the field. 


Edward ignores Rosalie as he arranges Bella's hair.


EDWARD
I shouldn't have brought you here. 
I'm so sorry.


She'd ask why, but suddenly, they all turn as one toward -

THE EDGE OF THE FOREST


There's a faint rustle... then James, Victoria and Laurent
emerge. As they near, Bella SEES their bare feet, then the 
deep BURGUNDY of their eyes. Laurent holds up the baseball. 


LAURENT
I believe this belongs to you.


He tosses the ball (his casual toss is still blindingly fast) 
to Dr. Cullen who easily catches it and smiles politely.


DR. CULLEN
Thank you.


LAURENT
Could you use three more players?


DR. CULLEN
Of course.


LAURENT
I'm Laurent. This is Victoria. 
And James.


DR. CULLEN
Would you like to bat first?


Laurent picks up a bat. The Cullens take the field. Dr. 
Cullen is catcher, Edward is on first, with Bella behind him, 
near the Jeep.



77.
Bella sees that Edward's eyes are locked onto James. Laurent
is at bat first.


DR. CULLEN
I'm afraid your hunting activities have 
caused something of a mess for us. 


LAURENT
Our apologies. We didn't realize 
the territory had been claimed. 


DR. CULLEN
Yes, we maintain a permanent 
residence.


The three newcomers exchange a look of surprise.


LAURENT
Really? Well, we won't be a problem 
any more.


VICTORIA
The humans were tracking us, but we 
led them East-


Jasper pitches the ball -- Laurent SLAMS it -- but Alice is 
up a tree is a flash and the ball slams into Alice's hand
with a THWAP. Laurent is pissed, but James smiles ever so 
slightly, delighted at the discovery of worthy opponents.


James is up next and he POWER-SLAMS IT with AMAZING FORCE..
.


He runs past first, past Edward, past Bella..
.


CLOSE ON BELLA -- IN SLOW MOTION as the wind from the ball 
ruffles her hair, carrying her scent, which floats to 
-


JAMES -- who suddenly SCREECHES to a halt. His head WHIPS 
around at her and he lurches into a crouch, his nostrils 
flaring, excitedly, eyes locked on Bella.


JAMES
You brought a snack.


EDWARD springs in front of Bella, baring his teeth. A truly 
menacing, feral SNARL rips from his throat. James GROWLS back.


OVERHEAD SHOT: in a flash, the Cullens rush into position 
behind Edward -- Laurent and Victoria line up behind James. 


DR. CULLEN
The girl is with us.



78.
LAURENT
(trying to defuse 
situation)
We won't harm her.


EMMETT
(hungry for battle)
Just try it.


DR. CULLEN
I think it best if you leave.


LAURENT
Yes, I can see the game is over. 
We'll go now. James?


But James' eyes don't leave Edward's. Laurent puts a hand on
James' shoulder, and finally, James backs into the woods with
his cohorts, disappearing. Once they're gone, Esme 
immediately gathers up the bats-
-


DR. CULLEN
Get Bella out of here. We'll follow 
them. 


Dr. Cullen, Jasper and a resentful Rosalie race off after the 
three vampires. Edward scoops Bella up as we 
-


SMASH TO:


EXT. BASEBALL FIELD - ON THE JEEP - LATE TWILIGHT 96


Edward whips Bella into the Jeep and straps her in -
-


EDWARD
James is a tracker. I saw his mind. 
The hunt is his obsession, and my 
reaction set him off -
-


-- The tires spin as Edward WHIPS the jeep around 
-


EDWARD
-- We're a large clan of strong fighters 
all protecting one vulnerable human. 


(dark with disgust)
I just made this his most exciting 
game ever.


Bella blanches with the dawning realization of what she has just 
wrought up on them all as..
.


THE JEEP CAREENS DOWN THE DIRT MOUNTAIN ROAD


A jolting, death defying ride, SPLASHING through creeks, until 
they reach 
-



79.
97 EXT. MOUNTAIN ROAD - NIGHT 97


THE JEEP speeds wildly down the road.


EDWARD
The first place he'll go is your 
house. He'll track your scent 
there.


BELLA


(horrified)
What?!? Charlie's there. He's in 
danger because of me. Because of 
us!


EDWARD


(calmly)
Then we'll lead the tracker away 
from him. Somehow.


He angrily WHIPS around a bend, MUD FLYING 
-


98 INT. CHARLIE'S HOUSE - LIVING ROOM - NIGHT 98


Charlie watches a baseball game on T.V. as the door suddenly 
BURSTS open to reveal Bella, crying, and Edward, devastated-


BELLA
I said, leave me alone! 


EDWARD
Bella, don't do this. Just think 
about it, please 
-


BELLA
Get out! It's over.


She SLAMS the door. Charlie has risen, baffled, concerned.


CHARLIE
Bella? What happened? 


BELLA
I have to get out of this place. 
Out of Forks. I'm leaving. Now.


Bella runs upstairs. Charlie hurries after her 
-


99 INT. BELLA'S BEDROOM - NIGHT 99


Bella slams the door behind her. REVEAL Edward's already there,
pulling things from her drawers and shoving them into a duffle 
faster than humanly possible. Bella leans against the door. 



80.
BELLA
(a pained whisper)
I can't hurt him.


Edward gives her a look, you have to. There's a KNOCK.


INTERCUT Charlie on the other side. It's agony for both of them.


CHARLIE 
Bells. Did he hurt you?


BELLA
No, Dad. 


CHARLIE
Then what? Did he break up with you? 


BELLA
I broke up with him. 


CHARLIE
I thought you liked him?


BELLA
That's why I have to leave. I don't 
want this. I want to go home.


EDWARD
(whispering)
I'll be in the truck.


And he disappears out the window. Bella gathers strength to 
continue her performance. She opens the door to reveal Charlie. 
He follows as she carries her duffle and truck keys into 
-


100 INT. CHARLIE'S HOUSE - STAIRS (CONTINUOUS) - NIGHT 100


Bella charges down the stairs -- Charlie follows.


CHARLIE
Your mother's not even in Phoenix. 


BELLA
She'll come home. I'll call her 
from the road.


CHARLIE
You can't drive home now. I'll take 
you to the airport in the morning.


BELLA
I want to drive. I need time to 
think. I'll pull into a motel in 
a 
few hours. I promise.


She heads down the stairs. Charlie follows..
. 



81.
101 INT. CHARLIE'S HOUSE -LIVING ROOM (CONTINUOUS) -NIGHT 101


Bella reaches the ground floor with Charlie on her heels. 
She's almost to the door but Charlie blocks her. 


CHARLIE


Bells, I know I'm not around much, 


but I can change that. We can do 


more things together.


She takes a breath, hating herself for what she's about to say..
.


BELLA


Like watch more baseball on the flat 


screen? Or go to the Coffee Shop? 


Same people, same steak, same berry 


cobbler every night? That's you, 


Dad. Not me.


This hits Charlie hard. She can barely stand it, heads down 
the stairs, as he takes a second to recover..
.


CHARLIE
Bella... I just got you back.


Which breaks Bella's heart... and forces her to deliver the
final blow.


BELLA


And if I don't get out now, I'm 


going get stuck here like mom did.


Charlie is stunned, wounded. She takes advantage of his 
shock, pushing past him out the door. 


102 EXT. CHARLIE'S HOUSE - NIGHT 102


Bella exits, heads to her truck. Fresh tears spring to her 
eyes. 


ANGLE ON THE WOODS 


Trees, branches... and a pair of DEADLY EYES. James. He watches 
from a distance as Bella pulls out. The truck moves off... and 
so does James, leaving Charlie alone with his pain, staring out 
the window.


103 INT. BELLA'S TRUCK - NIGHT 103


Bella drives, wiping tears away. Suddenly Edward is outside 
the car, near Bella's window. 



82.
EDWARD
He'll forgive you.
(off Bella's startled look)
Slide over..
.


Bella slides over to the passenger side as Edward opens the 
door, sliding in, and takes the wheel. Bella slumps.


BELLA
His face... I said the same words 
my mother used when she left him. 


EDWARD
It was the only way he'd let you go. 


Edward FLOORS it.


EDWARD
Your father's safe now, Bella. The 
tracker is following us 
-


Suddenly, BOOM! - a dark figure LEAPS onto the bed of the 
truck. Bella SCREAMS. 


EDWARD
It's alright. It's just Emmett. 
Alice is in the car behind us. 


She catches her breath. It kills him to see her so frightened. 
She looks out the window as they drive through town..
. 


104 BELLA'S POV - EXT. FORKS COFFEE SHOP (CONT) - NIGHT 104


The small, insulated town passes by in SLOW MOTION... INSIDE we 
SEE Mike, Jessica, Eric and Angela laughing, flirting, innocent, 
hopeful..
.


105 EXT. CULLEN HOUSE - NIGHT 105


Edward, Emmett and Alice rush Bella from the truck to the 
house... but freeze when the door opens and Laurent exits. They 
immediately take defensive positions but Dr. Cullen appears.


DR. CULLEN
He came to warn us. About James.


They back down slightly. Laurent address Dr. Cullen.


LAURENT
I've grown tired of his games. But 
he's got unparalleled senses. 
Absolutely lethal. I've never seen 
anything like him in three hundred 
years ... And the woman, Victoria, 
will back him. Don't underestimate 
her.



83.
Dr. Cullen nods thanks. Laurent looks at Edward, apologetic. 


LAURENT
I'm truly sorry for what's been 
unleashed here.


And he moves off, disappearing into the woods..
.


106 INT. CULLEN HOUSE - FOUR CAR GARAGE - NIGHT


The side door BURSTS OPEN as Edward and the Cullens enter, 
followed by Bella. The lights flip on to reveal a pristine 
garage; the Volvo, the red BMW, a black Mercedes sedan, an SUV. 


Everyone but Rosalie springs into action, opening cupboards for 
supplies - cell phones, extra batteries, maps, portable GPS units, 
changes of clothes, cans of gasoline, etc. As they load up the 
vehicles 
-


JASPER
I've had to fight our kind before. 
We're hard to kill.


EDWARD
But not impossible. We'll tear him up 


EMMETT


(with bloodlust)
We'll rip him apart with our hands, 
then burn the pieces 
-


DR. CULLEN
I don't relish killing another creature. 
Even a sadistic one like James.


ROSALIE
If he doesn't get to one of us 
first.


BELLA


(horrified)
This is insane. You can't put yourselves 
in danger like this - for me.


ROSALIE
Too late.


Edward shoots Rosalie a look, but he grabs two sets of keys 
off a hook, throwing one set, lightning fast, to Dr. Cullen 
-


EDWARD
I'll run Bella south, while you lead 
the tracker away 
-



84.
DR. CULLEN
No, Edward -- the tracker thinks 
you won't leave Bella. He'll 
follow you.


ALICE
I'll go with Bella. Jasper and 
I 
will drive her south.


(facing him)
I'll keep her safe, Edward.


Edward agonizes. Frustrated. Alice steps forward.


EDWARD
(studies her, torn)
Can you keep your thoughts to yourself?


She nods. An unspoken agreement. Edward finally surrenders 
his keys to Alice. Then he opens one of Bella's suitcases,
pulling out clothes, tossing them to 
-


EDWARD
Esme, Rosalie, put these on so the 
tracker will pick up Bella's scent. 


ROSALIE


(dropping the clothes)
Why should I? What is she to me? Just 
a danger you've inflicted on us 
-


DR. CULLEN


(spinning on her)
Rosalie. Bella is with Edward. She's 
a part of this family now. And we 
protect our family. 


She glowers, but picks up the clothes. Dr. Cullen hits the door 
opener and the massive METAL DOORS roll open. Dr. Cullen 
squeezes Edward's shoulder before he and Esme climb into the
SUV. Everyone finishes loading up, climbing in cars 
-


Amid this, Edward and Bella take a moment together.


BELLA
If any of you get hurt because of me 
-


EDWARD
We won't, there are five of us, two of 
them. When it's done, I'll come get you. 


He pulls her closer, looking into her eyes. 


EDWARD
You're my life now.



85.
They drink each other in, possibly for the last time... as the SUV 
PEELS out, WIPING THE FRAME 
-


107 EXT. HIGHWAY, PACIFIC NORTHWEST - DAWN 107


The sun begins to rise on the empty road as a sleek, black 
MERCEDES SEDAN with dark tinted windows BLASTS through frame 
-


108 INT. MERCEDES - SAME 108


Jasper drives, Alice in the passenger seat. Bella is in the 
back, her eyes red from crying. She talks on her cell phone 
-


BELLA


Mom, it's me again. You must have 


let your phone die. Anyway, I'm 


not in Forks anymore but I'm okay. 


I'll explain when you call.


She hangs up, then faces back out the window, watching the green, 
misty Olympic Peninsula speed past. Off Bella's face -

A SERIES OF DISSOLVES THROUGHOUT THE DAY, THEN THE NIGHT 


-- show us the landscape as it changes from dark green 
forests to stretches of grassy hillsides, to drier, browner 
surroundings, until night falls and headlights lights flash 
by us. Finally, we land in..
.


109 OMITTED 109


110 EXT. FOREST, OLYMPIC PENINSULA - DAY 110


TREES BLOW PAST US at a blinding speed as we track Edward, 
Rosalie, and Emmett who dart in and out of frame, blasting through 
the misty woods, Edward, the fastest, in the lead.


Edward stops, trying to read his enemy's thoughts. Rosalie 
tears a tiny swatch of her shirt, leaves it on a FLOWERING 
MAPLE TREE. And then they're gone.


111 OMITTED 111


112 EXT. ANOTHER PART OF THE WOODS - DAY 112


Esme and Dr. Cullen crouch atop a hill, looking down at the 
river. In the distance, below, they SEE 
-


THEIR POV - ON THE LAKE - VICTORIA jogs into view. She then looks 
in their direction. Once Dr. Cullen and Esme are assured she has 
their scent, they continue over the hill's crest. 


113 OMITTED 113


114 EXT. FOREST, OLYMPIC PENINSULA - DAY 114



86.
James blasts past the FLOWERING MAPLE -- then stops, backtracks to 
the tree, finds the tiny swatch of fabric. He starts off again..
. 
but stops, smells the fabric. Something's not right. He runs
back in the opposite direction... Uh oh..
.


SMASH TO:


115 INT. SCOTTSDALE HOTEL - BEDROOM - LATE AFTERNOON 115


ON BELLA'S FACE: her eyes pop open. She's lying atop a bed, 
fully clothed. She rises, reorienting.


116 INT. SCOTTSDALE HOTEL - LIVING ROOM - LATE AFTERNOON 116


The blinds are pulled. Alice and Jasper stare blankly at 
a 


T.V. set. Several plates of food crowd a table. Alice looks 
up as Bella enters, looking at her cell phone. 
BELLA
I wish he'd call.


ALICE
You should eat.


But Bella ignores the food. She sits heavily.


BELLA
They could get hurt. It's not 
worth it.


JASPER
(insistent)
Yes. It is. 


She's taken aback. It's the first time he's engaged with her.


JASPER
Edward's changed since he found 
you. And none of us want to look 
into his eyes for the next hundred 
years if he loses you. 


(he looks forward again)
It's worth it.


Suddenly, Alice REELS. Jasper goes to her, Bella follows.


JASPER
What do you see?


ALICE
(with deep worry)
The tracker. He just changed course..
.


Jasper quickly sets a pad of paper and pencil in front of her. 



87.
JASPER
Where will it take him, Alice?


PUSH IN ON ALICE'S FACE as we-


FLASH POP TO - JAMES


A disorienting vision of him standing in a room full of..
.


ALICE
Mirrors. It's a room of mirrors.


Alice begins to draw at HYPER SPEED, closing her eyes, trying 
to see it clearly.


BELLA
How do the visions work? Edward 
said they weren't always certain. 


JASPER
She sees the course people are on, 
while they're on it. If they change 
their minds, the visions change. 


Bella looks over Alice's shoulder to see the drawing.


BELLA
So the course James is on now will 
lead him to... a ballet studio?


ALICE
(looks up at her)
You've been here?


BELLA
No. I don't know. I used to take 
ballet lessons as a kid. The 
school had an arch like that.


JASPER
Was your school here in Phoenix? 


BELLA
Yeah, around the corner from my house. 
But I haven't been there in ten years.


JASPER
Do you have any reason to go now?


BELLA
No. Hell, no. I hated the place.


Alice and Jasper share a look, trying to figure this out. 
Suddenly, Bella JUMPS as her cell phone RINGS. She picks it 
up. Sees the caller I.D. and exhales relief. She answers..
.



88.
BELLA
Edward. Are you alright?


INTERCUT WITH:


117 INT. JEEP/EXT. WASHINGTON ROAD - DAY 117


Dr. Cullen drives the Jeep, fast, Emmett in the back, Edward in 
the passenger seat on his cell phone. 


EDWARD
I'm coming to get you. 
(hates having to say 


this)
We lost the tracker. The woman is 
still in the area. Rosalie and 
Esme are protecting your father.


BELLA


(sinking)
This is my fault. You warned me, 
but I didn't think. I just..
.


EDWARD
Bella, we're in too deep. We can't 
change how we feel..
.


BELLA
No... we can't.
(then)
When will you get here?


EDWARD
In a couple hours. Then you and 
I 
will go somewhere. Together. The 
others will keep hunting.


(then, determined)
Bella, I swear to you, I'll do whatever 
it takes to make you safe again. 


Off Bella, her eyes welling..
.


118 EXT. SCOTTSDALE HOTEL - DAY 118


SEE Alice in the lobby, settling the bill. Jasper loads up 
the car out front. 


119 INT. SCOTTSDALE HOTEL - BEDROOM - DAY 119


Bella gathers her things, then her phone RINGS again. 


INSERT CALLER I.D. -It reads �HOME.� Bella answers -

BELLA
Mom, I'm so glad you got my -
-



89.
RENE (O.S.
)
(panicked)
Bella? Bella? Where are you? 


BELLA
Calm down, Mom. Everything is fine, 
okay? I'll explain every 
-


HEAR RUSTLING on the line, as if Rene dropped the phone.


BELLA
... Mom? Are you there?


Then Bella HEARS a voice that sends a chill down her spine 
-


JAMES (O.S.
)
Nice house you have here. Not the 
best on the block, but comfortable. 


INTERCUT WITH:


120 INT. RENE'S HOUSE, PHOENIX - DAY 120


VERY CLOSE ON JAMES, his sinister eyes and vicious smile.


JAMES
I was prepared to wait for you. 
But then Mom came home after she 
received a very worried call from 
your Dad. It all worked out quite 
well.


Bella's eyes are wild with fear.


JAMES
I must say, Forks High School doesn't 
protect its students' privacy very 
well. It was just too easy for 
Victoria to find your previous address. 


RENE (O.S.
)
Bella? Bella?..
.


BELLA
Leave my mother out of this.


JAMES
You're protective of her. That's 
nice. You can still save her. But 
you'll need to get away from your 
friends. Can you do that? 


BELLA
I... don't think so.



90.
JAMES
If your mother's life depends on it? 


Bella is terrified, but there's no choice here. 


BELLA
Where should I meet you?


James grins as he fingers a PHOTO of Bella that's attached to
the refrigerator with a magnet. It's the same photo Charlie
has of her, age 7, in a tutu, sitting on the floor. 


JAMES
The old ballet studio around the 
corner. And I'll know if you bring 
anyone along. Poor mommy would pay 
the price for that mistake.


(sniffs the air)
She smells like you. Delicious.


STAY ON BELLA as she hangs up, panicked. She starts flinging 
open drawers, searching for a weapon - a pen, a sewing kit. 
Useless. Then she remembers..
.


Her purse. She dumps out the contents, and FINDS the pepper 
spray Charlie gave her. She clings to it, her only protection 
now.


121 OMITTED 121


122 OMITTED 122


123 OMITTED 123


124 OMITTED 124


125 OMITTED 125


126 OMITTED 126


127 INT./EXT. SCOTTSDALE HOTEL - TWILIGHT - DRIVING 127


Bella walks through the lobby, scanning for Jasper and Alice. 
She spots them outside under the porte cacher, loading the 
Mercedes, deep in a heated discussion. She slips out the 
opposite door, rushes toward a Taxi and jumps in, closes the 
door. The DRIVER is an elderly woman with a hacking COUGH. 


BELLA
(taking a breath for 
courage)
8th and Palo Verde, please.


The taxi pulls out. Bella watches the hotel disappear. Off 
her FACE IN THE REAR WINDOW..
.



91.
BELLA (V.O.
)


I've never given much thought to 


how I would die..
.


128 EXT. SCOTTSDALE HOTEL - NIGHT - BELLA'S POV 128


Once again, we see the polished malls, the manicured cactus 
gardens. All empty for the night. 


BELLA (V.O.
)


But dying in the place of someone 
I 


love seems like a good way to go..
. 


129 OMITTED 129


130 OMITTED 130


131 EXT. MIMI'S SCHOOL OF DANCE - NIGHT 131


Bella climbs out of the taxi. It pulls away, leaving her on the 
curb facing the deserted building. Bella twirls her mother's
ring around her finger, then reaches for the pepper spray.


BELLA (V.O.
)


I can't bring myself to regret the 


decisions that brought me face to 


face with death... they also 


brought me to Edward.


She slips the pepper spray into her jeans pocket. She wraps 
her purse strap around her wrist. She takes a breath, 
approaches the school. Peers in the windows. The blinds are 
drawn. But from inside, we HEAR a faint sound..
.


RENE (O.S.
)
Bella? Bella? 


It's time. Bella goes to the front door. It's unlocked.


132 OMITTED 132


133 INT. MIMI'S SCHOOL OF DANCE - STUDIO - NIGHT 133


Bella cautiously enters this grand, empty room of mirrors. 
A 
ballet bar wraps around the walls -
-


RENE (O.S.
)
Bella, where are you? 


Bella whirls, trying to find its source. She follows the sound to 
a cleaning supply CLOSET. She throws open the door to FIND 
-


A T.V. - ON SCREEN A VIDEO PLAYS - Bella, age 7, hides in the 
very closet the T.V. is in now. Little Bella looks up at us. 



92.
RENE (O.S.
)
Don't you want to dance, baby? 


Little Bella shakes her head stubbornly. The frame jiggles 
as Rene hands someone the camera. Rene, ten years younger, 
appears on screen and kneels next to Bella.


BELLA
Everyone makes fun of me.


RENE
But you're a wonderful dancer.


BELLA
Mom, I suck. 


LAUGHTER behind Bella. She spins, trying to locate James in 
the mirrors. 


JAMES
That's my favorite part. Stubborn 
child, weren't you?


Bella's face flushes with rage... and relief. 


BELLA
She's not here.


JAMES
Sorry. But you really made it too easy.


Visible in the mirror, he sighs, disappointed. Then he steps 
up next to her and points a VIDEO CAMERA at Bella. 


JAMES
So to make things more entertaining, 
I'm going to make a little film of our 
time together. Borrowed this from 
your house. Hope you don't mind. 


(turns it on)
And... action!


Bella FLINGS her purse at him, and runs for the door.


JAMES
Excellent! An escape attempt.


Suddenly, he's right behind her. She freezes. 


JAMES
It'll break Edward's little heart.


He smells her hair. Touches her throat. 


BELLA
Edward has nothing to do with this.



93.
JAMES
He will. His rage will make for 
more interesting sport than his 
feeble attempt to protect you.


He's having too much fun to notice --the peppers spray in
her hand. She spins around and sprays him. 


Then she runs, as James REELS back briefly. But he leaps 
over her and lands RIGHT IN FRONT OF HER. 


Amused, he flings her across the floor like a bowling ball. 
She SMASHES hard into a mirrored column. James captures it 
on film. 


JAMES
Beautiful! Very visually dynamic. 
I chose my stage well.


He advances toward her.


JAMES
Still stubborn, aren't you? Is that 
what makes you special? Because 
frankly, I don't see it. 


He inhales as if he can taste her already 
-


JAMES
Too bad he didn't have the strength 
to turn you. Instead, he kept you 
this fragile little human. It's 
cruel, really. 


James flips on the camera, but the lens is coated with pepper 
spray. He tries to wipe it off.


JAMES
Well done! You've succeeded in 
annoying me.


He STOMPS on her shin! HEAR her tibia SNAP! Bella SCREAMS in 
agony. 


JAMES
Tell Edward how much it hurts. 


Abruptly, the camera is in her face 
-


JAMES
Tell him to avenge you.


BELLA
No! Edward, don't..
. 



94.
James inhales as her blood pools. He leans in, hungry. Bella, 
half-conscious, watches him turn the camera on his own face 
-


VIDEO CAMERA'S POV - ECU ON JAMES' FACE


JAMES
Cut! The end.


Suddenly -- JAMES IS KNOCKED OUT OF FRAME! 


He rises to find himself face to face with Edward. James 
CHARGES Edward, forcing him up against a column. 


JAMES
You're alone... because you're 
faster than the others. But not 
stronger.


James SMASHES Edward's face into the mirror until it cracks.


EDWARD
I'm strong enough to kill you.


Edward FLINGS James backwards -- SMASHING through 
a 
freestanding mirror -- into the doorway. He scoops Bella up 
and leaps toward the balcony exit door -- when suddenly he 
and Bella are JERKED downward.


James YANKS Edward violently onto the floor -- KNOCKING Bella 
out of his arms -- as James FLINGS Edward up into the top 
window -- EMBEDDING him in the casement and bricks. 


James crouches beside Bella. He grabs her HAND 
-


Looking directly at Edward with a sinister grin -- he SINKS 
HIS TEETH into Bella's hand! She SCREAMS in agony. 


Edward's rage ERUPTS -- he climbs out of the window casement 
and SUICIDE-DIVE-BOMBS James, savagely PLOWING him through 
the floorboards.


ON BELLA -- as the venom travels through her veins. 


BELLA'S POV - dark figures twist and fight, in and out of 
focus. 


Her eyes suddenly POP OPEN to see the EXPLOSIVE RAW REALITY 
of James KICKING Edward, delivering death blows when -
-


Suddenly Edward's hand SHOOTS UP and GRABS James' ankle.
Edward ROARS up to his feet and SWINGS James around like 
a 
baseball bat, SMASHING him into mirror after mirror. 


James is battered, beaten. Bella moans -- and the sound of 
her pain slices through Edward. In an animalistic fury, 
Edward BITES OFF a piece of James' flesh ..
.



95.
WHIP PAN from Bella's horrified face to DR. CULLEN --now
standing beside Edward, placing a hand on his son's shoulder.


Edward turns to see his father -- and EMMETT, JASPER, and 
ALICE, dropping down from the balcony.


Edward's expression changes --he realizes he's gone too far.
He backs off as his siblings crouch into attack mode and 
LUNGE at James like a pack of animals.


Dr. Cullen rushes to the injured Bella who SCREAMS again in 
pain. Edward dashes toward her -
-


BELLA'S POV -ON THE THREE CULLEN SIBLINGS, going in and out
of focus... it almost looks like a tribal dance as they rip 
out the floorboards and build a fire ... it's like a funeral
pyre as they rip James apart, throwing limbs into the fire..
. 


BACK ON BELLA -- as Edward reaches her side. Dr. Cullen works 
fast to assess her wounds, focusing on a massive bleed from her 
leg. But clearly her hand hurts the most. She writhes in pain. 


INTERCUT BELLA'S DISORIENTED POV WITH THE CHAOTIC REALITY:


Dr. Cullen applies pressure to the gash on her thigh -
-


DR. CULLEN
Her femoral artery's been severed. 
She's losing too much blood 
-


BELLA
It's on fire! My hand!


EDWARD
Venom -
-


DR. CULLEN


(working on Bella)


You have to make a choice. Either 


let the change happen 
-


EDWARD
No!


BELLA'S POV -ALICE appears behind Edward, fuzzy, indistinct.


ALICE
It's going to happen. I've seen it 
-


EDWARD
It doesn't have to be that way.


DR. CULLEN
Alice, find me a tourniquet. 
A 
rag, a shirt.



96.
Alice holds her nose and avoids the blood as she rips the 
sleeve off her blouse and kneels to aid Dr. Cullen. 


BELLA
It's burning!


EDWARD
What's the other choice? You said 
-


DR. CULLEN
(to Alice)
Tighter, above the knee 
-


EDWARD


Carlisle.


DR. CULLEN
You can try to suck the venom out. 


EDWARD
I -- won't be able to stop 
-


DR. CULLEN
Find the will to stop. But choose, 
she only has minutes left.


Edward looks down at Bella, thrashing in pain. Finally, 
Edward takes her hand. She tries to pull it away.


EDWARD
It's alright, Bella. I'll make it 
go away. 


He looks at her - then starts to suck the venom from her 
hand. They never take their eyes off one another, the 
connection palpable, intense..
. 


CLOSE ON BELLA'S EYES -wild with pain. But subsiding..
.


CLOSE ON EDWARD'S EYES -the frenzy has begun. He sucks
harder. Hungrily. Anguished, he wants to stop but can't. 
Dr. Cullen's voice sounds miles away..
.


DR. CULLEN
Stop. Her blood is clean, you're 
killing her.


-- but the bloodlust is too strong. He is killing her. Bella 
looks at him, forgivingly, as she begins to lose consciousness..
. 


BELLA'S POV -ON EDWARD -growing blurry... he disappears
into the blinding light. It's as if she's underwater, like
her dreams..
. 


BELLA (V.O.
)
Death is peaceful. Easy.



97.
Bella starts to float away... we're losing her..
.
Suddenly from the darkness, Edward reaches out a hand..
.
A brilliant light flares..
.


134 BELLA'S FACE APPEARS IN THE WHITENESS
Eyes closed. But they slowly open. She squints at the light. 
BELLA
Life... is harder..
. 
An oxygen tube rests under her nose. She reaches for it, 
confused. A hand stops her as her surroundings come into focus.
RENE (O.S.
)


You're awake, baby! You're okay!!
!
INT. HOSPITAL ROOM - DAY
Bella lies in a hospital bed. Bandaged, leg in a cast. In bad 


shape. Rene hovers over her, tears in her eyes. On the dresser, 

SEE get well cards and a PHOTO MONTAGE of her friends from Forks.
BELLA
Edward? Where's -
RENE
He's asleep.
She nods across the room to a chair in which Edward �sleeps.
�


RENE
He never leaves. And your dad's 
down in the cafeteria. 


BELLA
What... happened?


RENE
Baby, you fell down two flights of 
stairs and through a window. 


Bella is drawing a blank, confused. Rene jogs her memory 
-
RENE
Edward came here to convince you to 
come back to Forks. His father 
brought him down. You went to their 
hotel but you tripped on the stairs. 
A moment... then Bella realizes it's a cover story. She nods.
BELLA
Sounds like me.



98.
Rene's cell phone BEEPS. She opens it. Reads a text, starts
typing in a reply.


RENE
It's Phil. He's worried about you.


BELLA
Mom, you're... texting.


RENE


(smiling)
I told him to stay in Florida. The 
Suns signed him! 


BELLA
That's great mom.


RENE
Jacksonville is always sunny and 
you'll have your own bathroom..
.


BELLA
Mom, wait. I want to live in 
Forks. I have Dad..
. 


(re: the get well cards)
... and friends..
.


RENE
(re: Edward)
And he's there. 


Bella shrugs, conceding the truth.


RENE
Charlie doesn't like him. Blames 
him for your leaving. 


BELLA
What do you think?


RENE


(lowering her voice)
I think that boy is in love with 
you.


Bella smiles. Rene grins. Bella glances at Edward.


BELLA
Um, Mom, would you mind getting Dad? 
I 
want to talk to him. Apologize.


RENE
I'm sure he doesn't care about 
that, Baby. But I�ll go get him.



99.
Rene kisses Bella's forehead. Exits. Bella watches her go.
The door shutting behind her. Bella turns back to find 
Edward standing next to her with deep concern. Her eyes 
well. He kisses her forehead soothingly. 


BELLA
Is James - did you -- 
?


EDWARD
We took care of him. And the 
woman, Victoria, she ran off.


She closes her eyes with relief, then looks at him. 


BELLA
I'm alive because of you.


EDWARD
(darkens)
You're in here because of me. 


Her wounds cause him pain. He strokes her face.


EDWARD
The worst of it... was thinking 
I 
couldn't stop -

BELLA
But you did. 


EDWARD
Bella, you should go to Jacksonville. 
Where I can't hurt you anymore..
.


BELLA
What? No! I want to be with you! 
I 
don't want 
-


EDWARD


(sitting next to her)
Sssh. It's alright. I'm not going 
anywhere. I'm right here..
.


He wraps an arm around her. As she curls up in his arms..
. 


DISSOLVE TO:


135 EXT. FORKS, WASHINGTON - LATE AFTERNOON 135


An AERIAL SWEEP over the lush green forests. We're back in
the misty, damp beauty of the Pacific Northwest..
.



100.
136 EXT. CHARLIE'S HOUSE - BEAUTIFUL LATE AFTERNOON 136


At a picnic table, Charlie cleans a fish with a big knife. 
Edward waits awkwardly near his Volvo, dressed in an elegant 
suit. But even calm Edward is unnerved by Charlie's glare. The
front door opens and they look up to see 
-


BELLA --framed in the doorway in a stunning long dress. Edward 
is enchanted. Bella descends the steps with difficulty, due to 
her LEG CAST. Charlie edges out Edward to help her down. 


BELLA


Alice lent me the dress. It was the 


only thing that would fit over my 


cast. Is it too... 
?


EDWARD


You're perfect... I'll take good 


care of her, Chief. 


CHARLIE
Heard that before. 


Edward moves to open the car door. Charlie holds Bella back.


CHARLIE 
(sotto)
I put new pepper spray in your bag.


BELLA


Dad.


CHARLIE
... and... you look beautiful.


Father and daughter share a smile..
.


137 EXT./INT. MANSION, VIEW POINT INN - TWILIGHT 137


Edward's Volvo pulls up to this lovely inn. He helps Bella
out of the car, and begins to guide her through the dining 
room. Mr. Molina and other teachers are there. We may 
notice the back of a Redhead, mingling with the chaperones.


BELLA


I can't believe you're making me do 


this.


He just grins. Edward guides her around a corner to..
.


138 EXT. MANSION BACKYARD (CONTINUOUS) - TWILIGHT 138


THE PROM - Monte Carlo style. Gaming tables and roulette 
wheels. Guys in tuxes and girls in gowns gamble for prizes, 
dance and socialize. 



101.
BELLA
You really are trying to kill me.


EDWARD
Prom is an important rite of 
passage. I don't want you to miss 
anything. 


She can't be mad at him, just shakes her head affectionately.
They continue into the prom. Several heads turn. Bella sees 
-


THE DANCE FLOOR, where a gap has formed. In the middle, two 
couples whirl gracefully. It's Alice and Jasper, Rosalie and 
Emmett, looking absolutely stunning. 


Rosalie glances over; indifference has replaced fury. But 
Alice waves brightly. Bella returns it with a smile as we 
hear a crossfade into the next track-


BELLA'S POV -- THE DJ BOOTH 
-


It's Eric at the turntables, making the room bounce! Next to
him, Angela wears the headphones, flipping through a stack of 
vinyl. They nod at Bella -- she shoots them a smile when -
-


A FLASHBULB gets her attention 
-


BELLA'S POV - PHOTOGRAPHER'S STATION


Mike and Jessica stand in front of an Aston Martin cut-out. 
Bella catches their eye -- Mike does his best James Bond 
impersonation. Jessica poses like Pussy Galore.


Edward smirks, then turns to Bella 
-


EDWARD
Shall we? 


BELLA
(laughs, then realizes)
You're serious.


He doesn't wait for an answer, more or less CARRIES her to
the DANCE FLOOR -- then places her feet atop his own... and 
starts to move. She actually begins to enjoy it.


EDWARD
See? You're dancing.


BELLA
At prom.


As they dance, she feels his grace, his strength. Becomes 
thoughtful. Finally, she looks at him.



102.
BELLA
Edward... why did you save me?
(off his questioning look)
If you'd let the venom spread, 
I could've been like you by now.


EDWARD


(stops, horrified)
You don't know what you're saying. 
You don't want this.


BELLA
I want you. Always.


EDWARD
(angry)
I won't end your life for you. 


He keeps dancing, slowly, hoping his was the last word.


BELLA
I'm dying anyway. Every minute, 
I get closer, older 

EDWARD
That's how it's supposed to happen. 

BELLA
Not the way Alice saw it. 
(off his sharp look)
I heard her. She saw me like you. 

EDWARD
Her visions change, Bella. 

BELLA
Based on what someone decides. And 
I've decided.


He looks at her, angry. 


EDWARD
Is that what you dream about? 
Becoming a monster? 


BELLA
I dream about being with you forever. 


EDWARD
You really want this?


BELLA
Yes.


He lowers his lips to her neck. One bite is all it would take. 



103.
EDWARD
You're ready right now?


BELLA
Yes.


His lips hover over her skin, a long beat... then he presses his 
lips to her throat. Not a bite. A kiss. He looks at her.


EDWARD
You're going to have a long and 
happy life with me. Isn't that 
enough?


She looks at him... and finally smiles.


BELLA
For now.


They WHIRL around, gliding on his grace, never looking away from 
one another, as we CRANE UP on them, in each other's arms..
.


BELLA (V.O.)
No one will surrender tonight. But 
I won't give in. I know what I want.


CONTINUE UP AND BACK on the dance floor. We realize ..

... someone's watching it, looking down from the window of 
a second floor hotel room in the Inn. The MUSIC wafting up in 
echoes. PULL BACK to REVEAL..

VICTORIA, turning from the window. She's stylishly dressed
now, but seething -- a low, sinister SNARL in the back of her 
throat. PUSH IN FAST ON HER FACE, AND INTO HER BURGUNDY EYES 
filled with vengeance as we 
-


SMASH TO BLACK. 

`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)