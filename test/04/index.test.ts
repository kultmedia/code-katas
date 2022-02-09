const assert = require("assert");
import { ransomNote } from "../../src/04";

const { performance } = require("perf_hooks");

const expect = require("chai").expect;

describe("Ransom Note", () => {
    it("A basic example with return TRUE", () => {
        {
            const note = "give me the money";
            const magazine =
                "one thing that will give me happiness is the money";

            const result = ransomNote(note, magazine);

            assert.equal(result, true);
        }
    });
    it("A basic example with return FALSE", () => {
        {
            const note = "give me the money today";
            const magazine =
                "one thing that will give me happiness is the money";

            const result = ransomNote(note, magazine);

            assert.equal(result, false);
        }
    });
    it("A case where the word is needed twice but we only have it once", () => {
        {
            const note = "give me the money you know how much money";
            const magazine =
                "one thing that will give me happiness is the money you know how much it's true";

            const result = ransomNote(note, magazine);

            assert.equal(result, false);
        }
    });
    it("Same case as before but the word is there twice", () => {
        {
            const note = "give me the money you know how much money";
            const magazine =
                "one thing that will give me happiness is the money money you know how much it's true";

            const result = ransomNote(note, magazine);

            assert.equal(result, true);
        }
    });
    it("Another example with return TRUE", () => {
        {
            const note = "two times two is four";
            const magazine = "four is two times two";

            const result = ransomNote(note, magazine);

            assert.equal(result, true);
        }
    });
    it("Another example with return FALSE", () => {
        {
            const note = "two times two is four";
            const magazine = "two times three is not four";

            const result = ransomNote(note, magazine);

            assert.equal(result, false);
        }
    });
    it("A case with a lot of text, where we also check for performance", () => {
        {
            const note = "meet me at the bridge";
            const magazine =
                "day up would worry fight cover government during republican receive foot weapon deep truth firm head voice sea energy difference tend we shake top huge environment specific election western human model room environmental rich than doctor garden however officer gun each not believe six past possible city message at everything world couple spring moment discover long keep race player teacher ago subject language age story television dog short approach have determine bed talk shot appear middle total seat which author debate central protect when actually company he can recent threat director education father sister argue fill often drug n't three bill decade camera type record address skill cup manage finally help little though avoid party street partner citizen others care big beyond me idea person step police large another rather structure increase role need good floor say wonder dinner radio too edge victim raise special sport industry white join young know throughout catch on war machine require money stuff strong pm land hang develop make board expert choose claim husband health give medical summer pattern behind team administration contain effect activity collection mean end fly media kid write practice eight over will kill action morning organization dead prove into fall kitchen current loss nice factor them eat service tonight reality product far agent treatment benefit myself surface wrong choice stop purpose either above ten fish these food interview some suffer nature tv look student film senior notice speech car all mr agree pass figure assume why finger hit ability career for important scientist system including modern magazine gas consider dark school trouble lose rest five personal use minute general cause star who whole itself yourself level space someone cancer news already detail born quality smile source available then this character manager always thus through authority us no whether of difficult concern member fear play tax house security reduce common beautiful support become almost success area chair strategy grow private leave order majority girl shoot produce heavy former lie national hand there live follow problem my occur institution color apply across single between thousand four policy or first prepare i rule enter court begin sexual movement local early investment send treat bring region marriage clearly size face pain true in get line kind opportunity article whose should able a major million paper southern pay anything period well soldier billion small art offer against sense stock exist nation effort hospital poor start economic learn public hard unit ahead certainly fail second carry behavior development professor see fast civil law air work table enough game program sing add once image yes herself audience reach forget blood laugh plan site history close establish customer clear identify bit mouth congress thank since left now serious simple attorney expect ball full series ask else must half watch name standard music mrs technology sound off event door parent together military resource plant son attack answer similar among under account still recently the about ground stay animal never information how meeting out official exactly example feeling simply form wait chance vote power like could point group other tough provide less campaign likely economy those present without onto goal necessary shoulder century town score alone to dream interest affect while love process owner with beat one financial pretty statement challenge front test lay rock walk hot focus rise sure wear word prevent enjoy eye experience ready next evening patient yet book try tell it from hair range cold generation piece accept move free even every decide realize soon section wall respond question result several what where participant two discussion as that democratic bar cultural her main quickly none indeed die deal any throw consumer key near glass federal according along control skin and measure east leader commercial religious you positive very mention maintain compare great impact somebody drive value science building by blue real inside anyone arrive defense time few worker black card production maybe position physical painting responsibility themselves population especially same hotel turn leg so writer note scene week safe also reveal social down both reason church home think executive read issue late sign operation lead sort perform attention find life whatever nearly change return guess seek she just continue conference agency page show list suddenly our employee bank fine might body data today violence its society politics draw coach create bridge night oh interesting foreign response professional task bad hope describe cost family popular child sell place wide style situation particularly international win do your such happen open culture hear people decision teach business push meet disease method understand sometimes west want outside yard own bag green political college travel course around low north whom feel instead stand road fact property although baby analysis trip listen significant base discuss best hour computer guy oil new allow explain mission various charge peace go woman relate democrat thought easy many tree design involve thing red better quite lot state year future call seem speak visit brother adult old class act legal project third happy force cut again trade drop until nor hold him set despite condition because store sit weight remove save growth letter lawyer movie management only before job amount toward everyone most fund item view seven check indicate stage may usually performance side more right yeah they perhaps price field wish crime different wind really research run much number trial station sex nothing something phone season american study everybody report budget ok newspaper particular death include remember relationship represent man memory be option pick center certain training come daughter light final artist south boy network upon spend box arm later water improve hundred probably cell his office risk last back evidence serve agreement successful candidate direction window heart song reflect their away knowledge pressure break after staff country entire recognize admit miss finish picture least buy imagine rate let month take share part if president market per wife but mind capital theory term himself ever friend natural heat put fire mother community way build high case forward suggest material degree here traditional remain within matter individual pull";

            const t0 = performance.now();

            const result = ransomNote(note, magazine);

            const t1 = performance.now();

            assert.equal(result, true);

            expect(t1 - t0).to.be.within(0, 0.2);
        }
    });
});
