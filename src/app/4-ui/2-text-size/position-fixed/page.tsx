"use client";
import { useState } from "react";

const Page = () => {
	const [flag, setFlag] = useState(false);
	return (
		<div>
			<h1
				style={{
					position: flag ? "fixed" : "static",
					top: "0",
					left: "1rem",
				}}
			>
				ポジションが固定されています。
			</h1>
			<div style={{ minHeight: flag ? "5rem" : "0" }}></div>
			<button onClick={() => setFlag(!flag)}>ヘッダー固定/解除</button>
			<p>
				石炭をば早はや積み果てつ。中等室の卓つくゑのほとりはいと静にて、熾熱燈しねつとうの光の晴れがましきも徒いたづらなり。今宵は夜毎にこゝに集ひ来る骨牌カルタ仲間も「ホテル」に宿りて、舟に残れるは余一人ひとりのみなれば。
				五年前いつとせまへの事なりしが、平生ひごろの望足りて、洋行の官命を蒙かうむり、このセイゴンの港まで来こし頃は、目に見るもの、耳に聞くもの、一つとして新あらたならぬはなく、筆に任せて書き記しるしつる紀行文日ごとに幾千言をかなしけむ、当時の新聞に載せられて、世の人にもてはやされしかど、今日けふになりておもへば、穉をさなき思想、身の程ほど知らぬ放言、さらぬも尋常よのつねの動植金石、さては風俗などをさへ珍しげにしるしゝを、心ある人はいかにか見けむ。こたびは途に上りしとき、日記にきものせむとて買ひし冊子さつしもまだ白紙のまゝなるは、独逸ドイツにて物学びせし間まに、一種の「ニル、アドミラリイ」の気象をや養ひ得たりけむ、あらず、これには別に故あり。
				げに東ひんがしに還かへる今の我は、西に航せし昔の我ならず、学問こそ猶なほ心に飽き足らぬところも多かれ、浮世のうきふしをも知りたり、人の心の頼みがたきは言ふも更なり、われとわが心さへ変り易きをも悟り得たり。きのふの是はけふの非なるわが瞬間の感触を、筆に写して誰たれにか見せむ。これや日記の成らぬ縁故なる、あらず、これには別に故あり。
				嗚呼あゝ、ブリンヂイシイの港を出いでゝより、早や二十日はつかあまりを経ぬ。世の常ならば生面せいめんの客にさへ交まじはりを結びて、旅の憂さを慰めあふが航海の習ならひなるに、微恙びやうにことよせて房へやの裡うちにのみ籠こもりて、同行の人々にも物言ふことの少きは、人知らぬ恨に頭かしらのみ悩ましたればなり。此この恨は初め一抹の雲の如く我わが心を掠かすめて、瑞西スヰスの山色をも見せず、伊太利イタリアの古蹟にも心を留めさせず、中頃は世を厭いとひ、身をはかなみて、腸はらわた日ごとに九廻すともいふべき惨痛をわれに負はせ、今は心の奥に凝り固まりて、一点の翳かげとのみなりたれど、文ふみ読むごとに、物見るごとに、鏡に映る影、声に応ずる響の如く、限なき懐旧の情を喚び起して、幾度いくたびとなく我心を苦む。嗚呼、いかにしてか此恨を銷せうせむ。若もし外ほかの恨なりせば、詩に詠じ歌によめる後は心地こゝちすが／＼しくもなりなむ。これのみは余りに深く我心に彫ゑりつけられたればさはあらじと思へど、今宵はあたりに人も無し、房奴ばうどの来て電気線の鍵を捩ひねるには猶程もあるべければ、いで、その概略を文に綴りて見む。
				余は幼き比ころより厳しき庭の訓をしへを受けし甲斐かひに、父をば早く喪うしなひつれど、学問の荒すさみ衰ふることなく、旧藩の学館にありし日も、東京に出でゝ予備黌よびくわうに通ひしときも、大学法学部に入りし後も、太田豊太郎とよたらうといふ名はいつも一級の首はじめにしるされたりしに、一人子ひとりごの我を力になして世を渡る母の心は慰みけらし。十九の歳には学士の称を受けて、大学の立ちてよりその頃までにまたなき名誉なりと人にも言はれ、某なにがし省に出仕して、故郷なる母を都に呼び迎へ、楽しき年を送ること三とせばかり、官長の覚え殊ことなりしかば、洋行して一課の事務を取り調べよとの命を受け、我名を成さむも、我家を興さむも、今ぞとおもふ心の勇み立ちて、五十を踰こえし母に別るゝをもさまで悲しとは思はず、遙々はる／″＼と家を離れてベルリンの都に来ぬ。
				余は模糊もこたる功名の念と、検束に慣れたる勉強力とを持ちて、忽たちまちこの欧羅巴ヨオロツパの新大都の中央に立てり。何等なんらの光彩ぞ、我目を射むとするは。何等の色沢ぞ、我心を迷はさむとするは。菩提樹下と訳するときは、幽静なる境さかひなるべく思はるれど、この大道髪かみの如きウンテル、デン、リンデンに来て両辺なる石だゝみの人道を行く隊々くみ／″＼の士女を見よ。胸張り肩聳そびえたる士官の、まだ維廉ヰルヘルム一世の街に臨める※(「窗／心」、第3水準1-89-54)まどに倚より玉ふ頃なりければ、様々の色に飾り成したる礼装をなしたる、妍かほよき少女をとめの巴里パリーまねびの粧よそほひしたる、彼も此も目を驚かさぬはなきに、車道の土瀝青チヤンの上を音もせで走るいろ／＼の馬車、雲に聳ゆる楼閣の少しとぎれたる処ところには、晴れたる空に夕立の音を聞かせて漲みなぎり落つる噴井ふきゐの水、遠く望めばブランデンブルク門を隔てゝ緑樹枝をさし交かはしたる中より、半天に浮び出でたる凱旋塔の神女の像、この許多あまたの景物目睫もくせふの間に聚あつまりたれば、始めてこゝに来こしものゝ応接に遑いとまなきも宜うべなり。されど我胸には縦たとひいかなる境に遊びても、あだなる美観に心をば動さじの誓ありて、つねに我を襲ふ外物を遮さへぎり留めたりき。
				余が鈴索すゞなはを引き鳴らして謁えつを通じ、おほやけの紹介状を出だして東来の意を告げし普魯西プロシヤの官員は、皆快く余を迎へ、公使館よりの手つゞきだに事なく済みたらましかば、何事にもあれ、教へもし伝へもせむと約しき。喜ばしきは、わが故里ふるさとにて、独逸、仏蘭西フランスの語を学びしことなり。彼等は始めて余を見しとき、いづくにていつの間にかくは学び得つると問はぬことなかりき。
				さて官事の暇いとまあるごとに、かねておほやけの許をば得たりければ、ところの大学に入りて政治学を修めむと、名を簿冊ぼさつに記させつ。
				ひと月ふた月と過す程に、おほやけの打合せも済みて、取調も次第に捗はかどり行けば、急ぐことをば報告書に作りて送り、さらぬをば写し留めて、つひには幾巻いくまきをかなしけむ。大学のかたにては、穉き心に思ひ計りしが如く、政治家になるべき特科のあるべうもあらず、此か彼かと心迷ひながらも、二三の法家の講筵かうえんに列つらなることにおもひ定めて、謝金を収め、往きて聴きつ。
				かくて三年みとせばかりは夢の如くにたちしが、時来れば包みても包みがたきは人の好尚なるらむ、余は父の遺言を守り、母の教に従ひ、人の神童なりなど褒ほむるが嬉しさに怠らず学びし時より、官長の善き働き手を得たりと奨はげますが喜ばしさにたゆみなく勤めし時まで、たゞ所動的、器械的の人物になりて自ら悟らざりしが、今二十五歳になりて、既に久しくこの自由なる大学の風に当りたればにや、心の中なにとなく妥おだやかならず、奥深く潜みたりしまことの我は、やうやう表にあらはれて、きのふまでの我ならぬ我を攻むるに似たり。余は我身の今の世に雄飛すべき政治家になるにも宜よろしからず、また善く法典を諳そらんじて獄を断ずる法律家になるにもふさはしからざるを悟りたりと思ひぬ。
				余は私ひそかに思ふやう、我母は余を活いきたる辞書となさんとし、我官長は余を活きたる法律となさんとやしけん。辞書たらむは猶ほ堪ふべけれど、法律たらんは忍ぶべからず。今までは瑣々さゝたる問題にも、極めて丁寧ていねいにいらへしつる余が、この頃より官長に寄する書には連しきりに法制の細目に拘かゝづらふべきにあらぬを論じて、一たび法の精神をだに得たらんには、紛々たる万事は破竹の如くなるべしなどゝ広言しつ。又大学にては法科の講筵を余所よそにして、歴史文学に心を寄せ、漸く蔗しよを嚼かむ境に入りぬ。
				官長はもと心のまゝに用ゐるべき器械をこそ作らんとしたりけめ。独立の思想を懐いだきて、人なみならぬ面おももちしたる男をいかでか喜ぶべき。危きは余が当時の地位なりけり。されどこれのみにては、なほ我地位を覆くつがへすに足らざりけんを、日比ひごろ伯林ベルリンの留学生の中うちにて、或る勢力ある一群ひとむれと余との間に、面白からぬ関係ありて、彼人々は余を猜疑さいぎし、又遂つひに余を讒誣ざんぶするに至りぬ。されどこれとても其故なくてやは。
				彼人々は余が倶ともに麦酒ビイルの杯をも挙げず、球突きの棒キユウをも取らぬを、かたくななる心と慾を制する力とに帰して、且かつは嘲あざけり且は嫉ねたみたりけん。されどこは余を知らねばなり。嗚呼、此故よしは、我身だに知らざりしを、怎いかでか人に知らるべき。わが心はかの合歓ねむといふ木の葉に似て、物触さやれば縮みて避けんとす。我心は処女に似たり。余が幼き頃より長者の教を守りて、学まなびの道をたどりしも、仕つかへの道をあゆみしも、皆な勇気ありて能よくしたるにあらず、耐忍勉強の力と見えしも、皆な自ら欺き、人をさへ欺きつるにて、人のたどらせたる道を、唯ただ一条ひとすぢにたどりしのみ。余所に心の乱れざりしは、外物を棄てゝ顧みぬ程の勇気ありしにあらず、唯たゞ外物に恐れて自らわが手足を縛せしのみ。故郷を立ちいづる前にも、我が有為の人物なることを疑はず、又我心の能く耐へんことをも深く信じたりき。嗚呼、彼も一時。舟の横浜を離るるまでは、天晴あつぱれ豪傑と思ひし身も、せきあへぬ涙に手巾しゆきんを濡らしつるを我れ乍ながら怪しと思ひしが、これぞなか／＼に我本性なりける。此心は生れながらにやありけん、又早く父を失ひて母の手に育てられしによりてや生じけん。
				彼かの人々の嘲るはさることなり。されど嫉むはおろかならずや。この弱くふびんなる心を。
				赤く白く面おもてを塗りて、赫然かくぜんたる色の衣を纏まとひ、珈琲店カツフエエに坐して客を延ひく女をみなを見ては、往きてこれに就かん勇気なく、高き帽を戴き、眼鏡に鼻を挾ませて、普魯西プロシヤにては貴族めきたる鼻音にて物言ふ「レエベマン」を見ては、往きてこれと遊ばん勇気なし。此等の勇気なければ、彼活溌なる同郷の人々と交らんやうもなし。この交際の疎うときがために、彼人々は唯余を嘲り、余を嫉むのみならで、又余を猜疑することゝなりぬ。これぞ余が冤罪ゑんざいを身に負ひて、暫時の間に無量の艱難かんなんを閲けみし尽す媒なかだちなりける。
				或る日の夕暮なりしが、余は獣苑を漫歩して、ウンテル、デン、リンデンを過ぎ、我がモンビシユウ街の僑居けうきよに帰らんと、クロステル巷かうの古寺の前に来ぬ。余は彼の燈火ともしびの海を渡り来て、この狭く薄暗き巷こうぢに入り、楼上の木欄おばしまに干したる敷布、襦袢はだぎなどまだ取入れぬ人家、頬髭長き猶太ユダヤ教徒の翁おきなが戸前こぜんに佇たゝずみたる居酒屋、一つの梯はしごは直ちに楼たかどのに達し、他の梯は窖あなぐら住まひの鍛冶かぢが家に通じたる貸家などに向ひて、凹字あふじの形に引籠みて立てられたる、此三百年前の遺跡を望む毎に、心の恍惚となりて暫し佇みしこと幾度なるを知らず。
				今この処を過ぎんとするとき、鎖とざしたる寺門の扉に倚りて、声を呑みつゝ泣くひとりの少女をとめあるを見たり。年は十六七なるべし。被かむりし巾きれを洩れたる髪の色は、薄きこがね色にて、着たる衣は垢つき汚れたりとも見えず。我足音に驚かされてかへりみたる面おもて、余に詩人の筆なければこれを写すべくもあらず。この青く清らにて物問ひたげに愁うれひを含める目まみの、半ば露を宿せる長き睫毛まつげに掩おほはれたるは、何故に一顧したるのみにて、用心深き我心の底までは徹したるか。
				彼は料はからぬ深き歎きに遭あひて、前後を顧みる遑いとまなく、こゝに立ちて泣くにや。わが臆病なる心は憐憫れんびんの情に打ち勝たれて、余は覚えず側そばに倚り、「何故に泣き玉ふか。ところに繋累けいるゐなき外人よそびとは、却かへりて力を借し易きこともあらん。」といひ掛けたるが、我ながらわが大胆なるに呆あきれたり。
				彼は驚きてわが黄なる面を打守りしが、我が真率なる心や色に形あらはれたりけん。「君は善き人なりと見ゆ。彼の如く酷むごくはあらじ。又また我母の如く。」暫し涸れたる涙の泉は又溢れて愛らしき頬ほを流れ落つ。
				「我を救ひ玉へ、君。わが恥なき人とならんを。母はわが彼の言葉に従はねばとて、我を打ちき。父は死にたり。明日あすは葬らでは※(「りっしんべん＋（匚＜夾）」、第3水準1-84-56)かなはぬに、家に一銭の貯たくはへだになし。」
				跡は欷歔ききよの声のみ。我眼まなこはこのうつむきたる少女の顫ふるふ項うなじにのみ注がれたり。
				「君が家やに送り行かんに、先まづ心を鎮しづめ玉へ。声をな人に聞かせ玉ひそ。こゝは往来なるに。」彼は物語するうちに、覚えず我肩に倚りしが、この時ふと頭かしらを擡もたげ、又始てわれを見たるが如く、恥ぢて我側を飛びのきつ。
				人の見るが厭はしさに、早足に行く少女の跡に附きて、寺の筋向ひなる大戸を入れば、欠け損じたる石の梯あり。これを上ぼりて、四階目に腰を折りて潜るべき程の戸あり。少女は※(「金＋肅」、第3水準1-93-39)さびたる針金の先きを捩ねぢ曲げたるに、手を掛けて強く引きしに、中には咳枯しはがれたる老媼おうなの声して、「誰たぞ」と問ふ。エリス帰りぬと答ふる間もなく、戸をあらゝかに引開ひきあけしは、半ば白しらみたる髪、悪あしき相にはあらねど、貧苦の痕を額ぬかに印せし面の老媼にて、古き獣綿の衣を着、汚れたる上靴を穿はきたり。エリスの余に会釈して入るを、かれは待ち兼ねし如く、戸を劇はげしくたて切りつ。
				余は暫し茫然として立ちたりしが、ふと油燈ラムプの光に透して戸を見れば、エルンスト、ワイゲルトと漆うるしもて書き、下に仕立物師と注したり。これすぎぬといふ少女が父の名なるべし。内には言ひ争ふごとき声聞えしが、又静になりて戸は再び明きぬ。さきの老媼は慇懃いんぎんにおのが無礼の振舞せしを詫わびて、余を迎へ入れつ。戸の内は厨くりやにて、右手めての低き※(「窗／心」、第3水準1-89-54)に、真白ましろに洗ひたる麻布を懸けたり。左手ゆんでには粗末に積上げたる煉瓦の竈かまどあり。正面の一室の戸は半ば開きたるが、内には白布しらぬのを掩へる臥床ふしどあり。伏したるはなき人なるべし。竈の側なる戸を開きて余を導きつ。この処は所謂いはゆる「マンサルド」の街に面したる一間ひとまなれば、天井もなし。隅の屋根裏より※(「窗／心」、第3水準1-89-54)に向ひて斜に下れる梁はりを、紙にて張りたる下の、立たば頭かしらの支つかふべき処に臥床あり。中央なる机には美しき氈かもを掛けて、上には書物一二巻と写真帖とを列ならべ、陶瓶たうへいにはこゝに似合はしからぬ価あたひ高き花束を生けたり。そが傍かたはらに少女は羞はぢを帯びて立てり。
				彼は優すぐれて美なり。乳ちの如き色の顔は燈火に映じて微紅うすくれなゐを潮さしたり。手足の繊かぼそく※(「鳧」の「几」に代えて「衣」、第3水準1-91-74)たをやかなるは、貧家の女をみなに似ず。老媼の室へやを出でし跡にて、少女は少し訛なまりたる言葉にて云ふ。「許し玉へ。君をこゝまで導きし心なさを。君は善き人なるべし。我をばよも憎み玉はじ。明日に迫るは父の葬はふり、たのみに思ひしシヤウムベルヒ、君は彼を知らでやおはさん。彼は「ヰクトリア」座の座頭ざがしらなり。彼が抱へとなりしより、早や二年ふたとせなれば、事なく我等を助けんと思ひしに、人の憂に附けこみて、身勝手なるいひ掛けせんとは。我を救ひ玉へ、君。金をば薄き給金を析さきて還し参らせん。縦令よしや我身は食くらはずとも。それもならずば母の言葉に。」彼は涙ぐみて身をふるはせたり。その見上げたる目まみには、人に否いなとはいはせぬ媚態あり。この目の働きは知りてするにや、又自らは知らぬにや。
				我が隠しには二三「マルク」の銀貨あれど、それにて足るべくもあらねば、余は時計をはづして机の上に置きぬ。「これにて一時の急を凌しのぎ玉へ。質屋の使のモンビシユウ街三番地にて太田と尋ね来こん折には価を取らすべきに。」
				少女は驚き感ぜしさま見えて、余が辞別わかれのために出いだしたる手を唇にあてたるが、はら／＼と落つる熱き涙なんだを我手の背そびらに濺そゝぎつ。
				嗚呼、何等の悪因ぞ。この恩を謝せんとて、自ら我僑居けうきよに来こし少女は、シヨオペンハウエルを右にし、シルレルを左にして、終日ひねもす兀坐こつざする我読書の※(「窗／心」、第3水準1-89-54)下さうかに、一輪の名花を咲かせてけり。この時を始として、余と少女との交まじはり漸く繁くなりもて行きて、同郷人にさへ知られぬれば、彼等は速了そくれうにも、余を以もて色を舞姫の群に漁ぎよするものとしたり。われ等二人ふたりの間にはまだ痴※(「馬＋矣」、第3水準1-94-13)ちがいなる歓楽のみ存したりしを。
				その名を斥ささんは憚はゞかりあれど、同郷人の中に事を好む人ありて、余が屡※(二の字点、1-2-22)しば／＼芝居に出入して、女優と交るといふことを、官長の許もとに報じつ。さらぬだに余が頗すこぶる学問の岐路きろに走るを知りて憎み思ひし官長は、遂に旨を公使館に伝へて、我官を免じ、我職を解いたり。公使がこの命を伝ふる時余に謂いひしは、御身おんみ若し即時に郷に帰らば、路用を給すべけれど、若し猶こゝに在らんには、公の助をば仰ぐべからずとのことなりき。余は一週日の猶予を請ひて、とやかうと思ひ煩ふうち、我生涯にて尤もつとも悲痛を覚えさせたる二通の書状に接しぬ。この二通は殆ど同時にいだしゝものなれど、一は母の自筆、一は親族なる某なにがしが、母の死を、我がまたなく慕ふ母の死を報じたる書ふみなりき。余は母の書中の言をこゝに反覆するに堪へず、涙の迫り来て筆の運はこびを妨ぐればなり。
				余とエリスとの交際は、この時までは余所目よそめに見るより清白なりき。彼は父の貧きがために、充分なる教育を受けず、十五の時舞の師のつのりに応じて、この恥づかしき業わざを教へられ、「クルズス」果てゝ後、「ヰクトリア」座に出でゝ、今は場中第二の地位を占めたり。されど詩人ハツクレンデルが当世の奴隷といひし如く、はかなきは舞姫の身の上なり。薄き給金にて繋がれ、昼の温習、夜の舞台と緊きびしく使はれ、芝居の化粧部屋に入りてこそ紅粉をも粧ひ、美しき衣をも纏へ、場外にてはひとり身の衣食も足らず勝なれば、親腹からを養ふものはその辛苦奈何いかにぞや。されば彼等の仲間にて、賤いやしき限りなる業に堕おちぬは稀まれなりとぞいふなる。エリスがこれを※(「二点しんにょう＋官」、第3水準1-92-56)のがれしは、おとなしき性質と、剛気ある父の守護とに依りてなり。彼は幼き時より物読むことをば流石さすがに好みしかど、手に入るは卑しき「コルポルタアジユ」と唱ふる貸本屋の小説のみなりしを、余と相識あひしる頃より、余が借しつる書を読みならひて、漸く趣味をも知り、言葉の訛なまりをも正し、いくほどもなく余に寄するふみにも誤字あやまりじ少なくなりぬ。かゝれば余等二人の間には先づ師弟の交りを生じたるなりき。我が不時の免官を聞きしときに、彼は色を失ひつ。余は彼が身の事に関りしを包み隠しぬれど、彼は余に向ひて母にはこれを秘め玉へと云ひぬ。こは母の余が学資を失ひしを知りて余を疎うとんぜんを恐れてなり。
				嗚呼、委くはしくこゝに写さんも要なけれど、余が彼を愛めづる心の俄にはかに強くなりて、遂に離れ難き中となりしは此折なりき。我一身の大事は前に横よこたはりて、洵まことに危急存亡の秋ときなるに、この行おこなひありしをあやしみ、又た誹そしる人もあるべけれど、余がエリスを愛する情は、始めて相見し時よりあさくはあらぬに、いま我数奇さくきを憐み、又別離を悲みて伏し沈みたる面に、鬢びんの毛の解けてかゝりたる、その美しき、いぢらしき姿は、余が悲痛感慨の刺激によりて常ならずなりたる脳髄を射て、恍惚の間にこゝに及びしを奈何いかにせむ。
				公使に約せし日も近づき、我命めいはせまりぬ。このまゝにて郷にかへらば、学成らずして汚名を負ひたる身の浮ぶ瀬あらじ。さればとて留まらんには、学資を得べき手だてなし。
				此時余を助けしは今我同行の一人なる相沢謙吉なり。彼は東京に在りて、既に天方伯の秘書官たりしが、余が免官の官報に出でしを見て、某新聞紙の編輯長へんしふちやうに説きて、余を社の通信員となし、伯林ベルリンに留まりて政治学芸の事などを報道せしむることとなしつ。
				社の報酬はいふに足らぬほどなれど、棲家すみかをもうつし、午餐ひるげに往く食店たべものみせをもかへたらんには、微かすかなる暮しは立つべし。兎角とかう思案する程に、心の誠を顕あらはして、助の綱をわれに投げ掛けしはエリスなりき。かれはいかに母を説き動かしけん、余は彼等親子の家に寄寓することゝなり、エリスと余とはいつよりとはなしに、有るか無きかの収入を合せて、憂きがなかにも楽しき月日を送りぬ。
				朝の※(「口＋加」、第3水準1-14-93)※(「口＋非」、第4水準2-4-8)カツフエエ果つれば、彼は温習に往き、さらぬ日には家に留まりて、余はキヨオニヒ街の間口せまく奥行のみいと長き休息所に赴おもむき、あらゆる新聞を読み、鉛筆取り出でゝ彼此と材料を集む。この截きり開きたる引※(「窗／心」、第3水準1-89-54)より光を取れる室にて、定りたる業わざなき若人わかうど、多くもあらぬ金を人に借して己れは遊び暮す老人、取引所の業の隙を偸ぬすみて足を休むる商人あきうどなどと臂ひぢを並べ、冷なる石卓いしづくゑの上にて、忙はしげに筆を走らせ、小をんなが持て来る一盞ひとつきの※(「口＋加」、第3水準1-14-93)※(「口＋非」、第4水準2-4-8)の冷さむるをも顧みず、明きたる新聞の細長き板ぎれに※(「插」でつくりの縦棒が下に突き抜けている、第4水準2-13-28)みたるを、幾種いくいろとなく掛け聯つらねたるかたへの壁に、いく度となく往来ゆききする日本人を、知らぬ人は何とか見けん。又一時近くなるほどに、温習に往きたる日には返り路ぢによぎりて、余と倶ともに店を立出づるこの常ならず軽き、掌上しやうじやうの舞をもなしえつべき少女を、怪み見送る人もありしなるべし。
				我学問は荒すさみぬ。屋根裏の一燈微に燃えて、エリスが劇場よりかへりて、椅いすに寄りて縫ものなどする側の机にて、余は新聞の原稿を書けり。昔しの法令条目の枯葉を紙上に掻寄かきよせしとは殊にて、今は活溌々たる政界の運動、文学美術に係る新現象の批評など、彼此と結びあはせて、力の及ばん限り、ビヨルネよりは寧ろハイネを学びて思を構へ、様々の文ふみを作りし中にも、引続きて維廉ヰルヘルム一世と仏得力フレデリツク三世との崩※(「歹＋且」、第3水準1-86-38)ほうそありて、新帝の即位、ビスマルク侯の進退如何いかんなどの事に就ては、故ことさらに詳つまびらかなる報告をなしき。さればこの頃よりは思ひしよりも忙はしくして、多くもあらぬ蔵書を繙ひもとき、旧業をたづぬることも難く、大学の籍はまだ刪けづられねど、謝金を収むることの難ければ、唯だ一つにしたる講筵だに往きて聴くことは稀なりき。
				我学問は荒みぬ。されど余は別に一種の見識を長じき。そをいかにといふに、凡およそ民間学の流布るふしたることは、欧洲諸国の間にて独逸に若しくはなからん。幾百種の新聞雑誌に散見する議論には頗すこぶる高尚なるもの多きを、余は通信員となりし日より、曾かつて大学に繁く通ひし折、養ひ得たる一隻の眼孔もて、読みては又読み、写しては又写す程に、今まで一筋の道をのみ走りし知識は、自おのづから綜括的になりて、同郷の留学生などの大かたは、夢にも知らぬ境地に到りぬ。彼等の仲間には独逸新聞の社説をだに善くはえ読まぬがあるに。
				明治廿一年の冬は来にけり。表街おもてまちの人道にてこそ沙すなをも蒔まけ、※すき［＃「金＋※(「插」でつくりの縦棒が下に突き抜けている、第4水準2-13-28)のつくり」、161-下-29］をも揮へ、クロステル街のあたりは凸凹とつあふ坎※(「土へん＋可」、第3水準1-15-40)かんかの処は見ゆめれど、表のみは一面に氷りて、朝に戸を開けば飢ゑ凍こゞえし雀の落ちて死にたるも哀れなり。室へやを温め、竈に火を焚きつけても、壁の石を徹し、衣の綿を穿うがつ北欧羅巴の寒さは、なか／＼に堪へがたかり。エリスは二三日前の夜、舞台にて卒倒しつとて、人に扶たすけられて帰り来しが、それより心地あしとて休み、もの食ふごとに吐くを、悪阻つはりといふものならんと始めて心づきしは母なりき。嗚呼、さらぬだに覚束おぼつかなきは我身の行末なるに、若し真まことなりせばいかにせまし。
				今朝は日曜なれば家に在れど、心は楽しからず。エリスは床に臥ふすほどにはあらねど、小ちさき鉄炉の畔ほとりに椅子さし寄せて言葉寡すくなし。この時戸口に人の声して、程なく庖厨はうちゆうにありしエリスが母は、郵便の書状を持て来て余にわたしつ。見れば見覚えある相沢が手なるに、郵便切手は普魯西プロシヤのものにて、消印には伯林ベルリンとあり。訝いぶかりつゝも披ひらきて読めば、とみの事にて預あらかじめ知らするに由なかりしが、昨夜よべこゝに着せられし天方大臣に附きてわれも来たり。伯の汝なんぢを見まほしとのたまふに疾とく来よ。汝が名誉を恢復するも此時にあるべきぞ。心のみ急がれて用事をのみいひ遣やるとなり。読み畢をはりて茫然たる面もちを見て、エリス云ふ。「故郷よりの文なりや。悪しき便たよりにてはよも。」彼は例の新聞社の報酬に関する書状と思ひしならん。「否、心にな掛けそ。おん身も名を知る相沢が、大臣と倶にこゝに来てわれを呼ぶなり。急ぐといへば今よりこそ。」
				かはゆき独り子を出し遣る母もかくは心を用ゐじ。大臣にまみえもやせんと思へばならん、エリスは病をつとめて起ち、上襦袢うはじゆばんも極めて白きを撰び、丁寧にしまひ置きし「ゲエロツク」といふ二列ぼたんの服を出して着せ、襟飾りさへ余が為めに手づから結びつ。
				「これにて見苦しとは誰たれも得言はじ。我鏡に向きて見玉へ。何故なにゆゑにかく不興なる面もちを見せ玉ふか。われも諸共もろともに行かまほしきを。」少し容かたちをあらためて。「否、かく衣を更め玉ふを見れば、何となくわが豊太郎の君とは見えず。」又た少し考へて。「縦令よしや富貴になり玉ふ日はありとも、われをば見棄て玉はじ。我病は母の宣のたまふ如くならずとも。」
				「何、富貴。」余は微笑しつ。「政治社会などに出でんの望みは絶ちしより幾年いくとせをか経ぬるを。大臣は見たくもなし。唯年久しく別れたりし友にこそ逢ひには行け。」エリスが母の呼びし一等「ドロシユケ」は、輪下にきしる雪道を※(「窗／心」、第3水準1-89-54)の下まで来ぬ。余は手袋をはめ、少し汚れたる外套を背に被おほひて手をば通さず帽を取りてエリスに接吻して楼たかどのを下りつ。彼は凍れる※(「窗／心」、第3水準1-89-54)を明け、乱れし髪を朔風さくふうに吹かせて余が乗りし車を見送りぬ。
				余が車を下りしは「カイゼルホオフ」の入口なり。門者に秘書官相沢が室の番号を問ひて、久しく踏み慣れぬ大理石の階はしごを登り、中央の柱に「プリユツシユ」を被へる「ゾフア」を据ゑつけ、正面には鏡を立てたる前房に入りぬ。外套をばこゝにて脱ぎ、廊わたどのをつたひて室の前まで往きしが、余は少し踟※(「足へん＋厨」、第3水準1-92-39)ちちうしたり。同じく大学に在りし日に、余が品行の方正なるを激賞したる相沢が、けふは怎いかなる面もちして出迎ふらん。室に入りて相対して見れば、形こそ旧に比ぶれば肥えて逞たくましくなりたれ、依然たる快活の気象、我失行をもさまで意に介せざりきと見ゆ。別後の情を細叙するにも遑いとまあらず、引かれて大臣に謁し、委托せられしは独逸語にて記せる文書の急を要するを飜訳せよとの事なり。余が文書を受領して大臣の室を出でし時、相沢は跡より来て余と午餐ひるげを共にせんといひぬ。
				食卓にては彼多く問ひて、我多く答へき。彼が生路は概おほむね平滑なりしに、轗軻かんか数奇さくきなるは我身の上なりければなり。
				余が胸臆を開いて物語りし不幸なる閲歴を聞きて、かれは屡※(二の字点、1-2-22)驚きしが、なか／＼に余を譴せめんとはせず、却りて他の凡庸なる諸生輩を罵りき。されど物語の畢をはりしとき、彼は色を正して諫いさむるやう、この一段のことは素もと生れながらなる弱き心より出でしなれば、今更に言はんも甲斐なし。とはいへ、学識あり、才能あるものが、いつまでか一少女の情にかゝづらひて、目的なき生活なりはひをなすべき。今は天方伯も唯だ独逸語を利用せんの心のみなり。おのれも亦また伯が当時の免官の理由を知れるが故に、強しひて其成心を動かさんとはせず、伯が心中にて曲庇者きよくひものなりなんど思はれんは、朋友に利なく、おのれに損あればなり。人を薦すゝむるは先づ其能を示すに若しかず。これを示して伯の信用を求めよ。又彼少女との関係は、縦令彼に誠ありとも、縦令情交は深くなりぬとも、人材を知りてのこひにあらず、慣習といふ一種の惰性より生じたる交なり。意を決して断てと。是これその言ことのおほむねなりき。
				大洋に舵かぢを失ひしふな人が、遙はるかなる山を望む如きは、相沢が余に示したる前途の方鍼はうしんなり。されどこの山は猶ほ重霧の間に在りて、いつ往きつかんも、否、果して往きつきぬとも、我中心に満足を与へんも定かならず。貧きが中にも楽しきは今の生活なりはひ、棄て難きはエリスが愛。わが弱き心には思ひ定めんよしなかりしが、姑しばらく友の言ことに従ひて、この情縁を断たんと約しき。余は守る所を失はじと思ひて、おのれに敵するものには抗抵すれども、友に対して否とはえ対こたへぬが常なり。
				別れて出づれば風面おもてを撲うてり。二重ふたへの玻璃ガラス※(「窗／心」、第3水準1-89-54)を緊しく鎖して、大いなる陶炉に火を焚きたる「ホテル」の食堂を出でしなれば、薄き外套を透る午後四時の寒さは殊さらに堪へ難く、膚はだへ粟立あはだつと共に、余は心の中に一種の寒さを覚えき。
				飜訳は一夜になし果てつ。「カイゼルホオフ」へ通ふことはこれより漸く繁くなりもて行く程に、初めは伯の言葉も用事のみなりしが、後には近比ちかごろ故郷にてありしことなどを挙げて余が意見を問ひ、折に触れては道中にて人々の失錯ありしことどもを告げて打笑ひ玉ひき。
				一月ばかり過ぎて、或る日伯は突然われに向ひて、「余は明旦あす、魯西亜ロシアに向ひて出発すべし。随したがひて来くべきか、」と問ふ。余は数日間、かの公務に遑なき相沢を見ざりしかば、此問は不意に余を驚かしつ。「いかで命に従はざらむ。」余は我恥を表はさん。此答はいち早く決断して言ひしにあらず。余はおのれが信じて頼む心を生じたる人に、卒然ものを問はれたるときは、咄嗟とつさの間かん、その答の範囲を善くも量らず、直ちにうべなふことあり。さてうべなひし上にて、その為なし難きに心づきても、強しひて当時の心虚なりしを掩ひ隠し、耐忍してこれを実行すること屡々なり。
				此日は飜訳の代しろに、旅費さへ添へて賜たまはりしを持て帰りて、飜訳の代をばエリスに預けつ。これにて魯西亜より帰り来んまでの費つひえをば支へつべし。彼は医者に見せしに常ならぬ身なりといふ。貧血の性さがなりしゆゑ、幾月か心づかでありけん。座頭よりは休むことのあまりに久しければ籍を除きぬと言ひおこせつ。まだ一月ばかりなるに、かく厳しきは故あればなるべし。旅立の事にはいたく心を悩ますとも見えず。偽りなき我心を厚く信じたれば。
				鉄路にては遠くもあらぬ旅なれば、用意とてもなし。身に合せて借りたる黒き礼服、新に買求めたるゴタ板の魯廷ろていの貴族譜、二三種の辞書などを、小「カバン」に入れたるのみ。流石に心細きことのみ多きこの程なれば、出で行く跡に残らんも物憂かるべく、又停車場にて涙こぼしなどしたらんには影護うしろめたかるべければとて、翌朝早くエリスをば母につけて知る人がり出いだしやりつ。余は旅装整へて戸を鎖し、鍵をば入口に住む靴屋の主人に預けて出でぬ。
				魯国行につきては、何事をか叙すべき。わが舌人ぜつじんたる任務つとめは忽地たちまちに余を拉らつし去りて、青雲の上に堕おとしたり。余が大臣の一行に随ひて、ペエテルブルクに在りし間に余を囲繞ゐねうせしは、巴里絶頂の驕奢けうしやを、氷雪の裡うちに移したる王城の粧飾さうしよく、故ことさらに黄蝋わうらふの燭しよくを幾つ共なく点ともしたるに、幾星の勲章、幾枝の「エポレツト」が映射する光、彫鏤てうるの工たくみを尽したる「カミン」の火に寒さを忘れて使ふ宮女の扇の閃きなどにて、この間仏蘭西語を最も円滑に使ふものはわれなるがゆゑに、賓主の間に周旋して事を弁ずるものもまた多くは余なりき。
				この間余はエリスを忘れざりき、否、彼は日毎に書ふみを寄せしかばえ忘れざりき。余が立ちし日には、いつになく独りにて燈火に向はん事の心憂さに、知る人の許もとにて夜に入るまでもの語りし、疲るゝを待ちて家に還り、直ちにいねつ。次の朝あした目醒めし時は、猶独り跡に残りしことを夢にはあらずやと思ひぬ。起き出でし時の心細さ、かゝる思ひをば、生計たつきに苦みて、けふの日の食なかりし折にもせざりき。これ彼が第一の書の略あらましなり。
				又程経てのふみは頗る思ひせまりて書きたる如くなりき。文をば否といふ字にて起したり。否、君を思ふ心の深き底そこひをば今ぞ知りぬる。君は故里ふるさとに頼もしき族やからなしとのたまへば、此地に善き世渡のたつきあらば、留り玉はぬことやはある。又我愛もて繋ぎ留めでは止やまじ。それも※(「りっしんべん＋（匚＜夾）」、第3水準1-84-56)かなはで東ひんがしに還り玉はんとならば、親と共に往かんは易けれど、か程に多き路用を何処いづくよりか得ん。怎いかなる業をなしても此地に留りて、君が世に出で玉はん日をこそ待ためと常には思ひしが、暫しの旅とて立出で玉ひしより此二十日ばかり、別離の思は日にけに茂りゆくのみ。袂たもとを分つはたゞ一瞬の苦艱くげんなりと思ひしは迷なりけり。我身の常ならぬが漸くにしるくなれる、それさへあるに、縦令よしやいかなることありとも、我をば努ゆめな棄て玉ひそ。母とはいたく争ひぬ。されど我身の過ぎし頃には似で思ひ定めたるを見て心折れぬ。わが東ひんがしに往かん日には、ステツチンわたりの農家に、遠き縁者あるに、身を寄せんとぞいふなる。書きおくり玉ひし如く、大臣の君に重く用ゐられ玉はゞ、我路用の金は兎も角もなりなん。今は只管ひたすら君がベルリンにかへり玉はん日を待つのみ。
				嗚呼、余は此書を見て始めて我地位を明視し得たり。恥かしきはわが鈍にぶき心なり。余は我身一つの進退につきても、また我身に係らぬ他人ひとの事につきても、決断ありと自ら心に誇りしが、此決断は順境にのみありて、逆境にはあらず。我と人との関係を照さんとするときは、頼みし胸中の鏡は曇りたり。
				大臣は既に我に厚し。されどわが近眼は唯だおのれが尽したる職分をのみ見き。余はこれに未来の望を繋ぐことには、神も知るらむ、絶えて想おもひ到らざりき。されど今こゝに心づきて、我心は猶ほ冷然たりし歟か。先に友の勧めしときは、大臣の信用は屋上の禽とりの如くなりしが、今は稍※(二の字点、1-2-22)やゝこれを得たるかと思はるゝに、相沢がこの頃の言葉の端に、本国に帰りて後も倶にかくてあらば云々しか／″＼といひしは、大臣のかく宣のたまひしを、友ながらも公事なれば明には告げざりし歟。今更おもへば、余が軽卒にも彼に向ひてエリスとの関係を絶たんといひしを、早く大臣に告げやしけん。
				嗚呼、独逸に来し初に、自ら我本領を悟りきと思ひて、また器械的人物とはならじと誓ひしが、こは足を縛して放たれし鳥の暫し羽を動かして自由を得たりと誇りしにはあらずや。足の糸は解くに由なし。曩さきにこれを繰あやつりしは、我わが某なにがし省の官長にて、今はこの糸、あなあはれ、天方伯の手中に在り。余が大臣の一行と倶にベルリンに帰りしは、恰あたかも是れ新年の旦あしたなりき。停車場に別を告げて、我家をさして車を駆かりつ。こゝにては今も除夜に眠らず、元旦に眠るが習なれば、万戸寂然たり。寒さは強く、路上の雪は稜角ある氷片となりて、晴れたる日に映じ、きら／＼と輝けり。車はクロステル街に曲りて、家の入口に駐とゞまりぬ。この時窓を開く音せしが、車よりは見えず。馭丁ぎよていに「カバン」持たせて梯を登らんとする程に、エリスの梯を駈け下るに逢ひぬ。彼が一声叫びて我頸うなじを抱きしを見て馭丁は呆れたる面もちにて、何やらむ髭ひげの内にて云ひしが聞えず。「善くぞ帰り来玉ひし。帰り来玉はずば我命は絶えなんを。」
				我心はこの時までも定まらず、故郷を憶おもふ念と栄達を求むる心とは、時として愛情を圧せんとせしが、唯だ此一刹那せつな、低徊踟※(「足へん＋厨」、第3水準1-92-39)ていくわいちちうの思は去りて、余は彼を抱き、彼の頭かしらは我肩に倚りて、彼が喜びの涙ははら／＼と肩の上に落ちぬ。
				「幾階か持ちて行くべき。」と鑼どらの如く叫びし馭丁は、いち早く登りて梯の上に立てり。
				戸の外に出迎へしエリスが母に、馭丁を労ねぎらひ玉へと銀貨をわたして、余は手を取りて引くエリスに伴はれ、急ぎて室に入りぬ。一瞥いちべつして余は驚きぬ、机の上には白き木綿、白き「レエス」などを堆うづたかく積み上げたれば。
				エリスは打笑うちゑみつゝこれを指ゆびさして、「何とか見玉ふ、この心がまへを。」といひつゝ一つの木綿ぎれを取上ぐるを見れば襁褓むつきなりき。「わが心の楽しさを思ひ玉へ。産れん子は君に似て黒き瞳子ひとみをや持ちたらん。この瞳子。嗚呼、夢にのみ見しは君が黒き瞳子なり。産れたらん日には君が正しき心にて、よもあだし名をばなのらせ玉はじ。」彼は頭を垂れたり。「穉をさなしと笑ひ玉はんが、寺に入らん日はいかに嬉しからまし。」見上げたる目には涙満ちたり。
				二三日の間は大臣をも、たびの疲れやおはさんとて敢あへて訪とぶらはず、家にのみ籠り居をりしが、或る日の夕暮使して招かれぬ。往きて見れば待遇殊にめでたく、魯西亜行の労を問ひ慰めて後、われと共に東にかへる心なきか、君が学問こそわが測り知る所ならね、語学のみにて世の用には足りなむ、滞留の余りに久しければ、様々の係累もやあらんと、相沢に問ひしに、さることなしと聞きて落居おちゐたりと宣ふ。其気色辞いなむべくもあらず。あなやと思ひしが、流石に相沢の言ことを偽なりともいひ難きに、若しこの手にしも縋すがらずば、本国をも失ひ、名誉を挽ひきかへさん道をも絶ち、身はこの広漠たる欧洲大都の人の海に葬られんかと思ふ念、心頭を衝ついて起れり。嗚呼、何等の特操なき心ぞ、「承うけたまはり侍はべり」と応こたへたるは。
				黒がねの額ぬかはありとも、帰りてエリスに何とかいはん。「ホテル」を出でしときの我心の錯乱は、譬たとへんに物なかりき。余は道の東西をも分かず、思に沈みて行く程に、往きあふ馬車の馭丁に幾度か叱しつせられ、驚きて飛びのきつ。暫くしてふとあたりを見れば、獣苑の傍かたはらに出でたり。倒るゝ如くに路の辺べの榻こしかけに倚りて、灼くが如く熱し、椎つちにて打たるゝ如く響く頭かしらを榻背たふはいに持たせ、死したる如きさまにて幾時をか過しけん。劇しき寒さ骨に徹すと覚えて醒めし時は、夜に入りて雪は繁く降り、帽の庇ひさし、外套の肩には一寸許ばかりも積りたりき。
				最早もはや十一時をや過ぎけん、モハビツト、カルヽ街通ひの鉄道馬車の軌道も雪に埋もれ、ブランデンブルゲル門の畔ほとりの瓦斯燈ガスとうは寂しき光を放ちたり。立ち上らんとするに足の凍えたれば、両手にて擦さすりて、漸やく歩み得る程にはなりぬ。
				足の運びの捗はかどらねば、クロステル街まで来しときは、半夜をや過ぎたりけん。こゝ迄来し道をばいかに歩みしか知らず。一月上旬の夜なれば、ウンテル、デン、リンデンの酒家、茶店は猶ほ人の出入盛りにて賑にぎはしかりしならめど、ふつに覚えず。我脳中には唯※(二の字点、1-2-22)我は免ゆるすべからぬ罪人なりと思ふ心のみ満ち／＼たりき。
				四階の屋根裏には、エリスはまだ寝いねずと覚おぼしく、烱然けいぜんたる一星の火、暗き空にすかせば、明かに見ゆるが、降りしきる鷺の如き雪片に、乍たちまち掩はれ、乍ちまた顕れて、風に弄もてあそばるゝに似たり。戸口に入りしより疲を覚えて、身の節の痛み堪へ難ければ、這はふ如くに梯を登りつ。庖厨はうちゆうを過ぎ、室の戸を開きて入りしに、机に倚りて襁褓むつき縫ひたりしエリスは振り返へりて、「あ」と叫びぬ。「いかにかし玉ひし。おん身の姿は。」
				驚きしも宜うべなりけり、蒼然として死人に等しき我面色、帽をばいつの間にか失ひ、髪は蓬おどろと乱れて、幾度か道にて跌つまづき倒れしことなれば、衣は泥まじりの雪に※(「さんずい＋于」、第3水準1-86-49)よごれ、処々は裂けたれば。
				余は答へんとすれど声出でず、膝の頻しきりに戦をのゝかれて立つに堪へねば、椅子を握つかまんとせしまでは覚えしが、その儘まゝに地に倒れぬ。
				人事を知る程になりしは数週すしうの後なりき。熱劇しくて譫語うはことのみ言ひしを、エリスが慇ねもごろにみとる程に、或日相沢は尋ね来て、余がかれに隠したる顛末てんまつを審つばらに知りて、大臣には病の事のみ告げ、よきやうに繕つくろひ置きしなり。余は始めて、病牀に侍するエリスを見て、その変りたる姿に驚きぬ。彼はこの数週の内にいたく痩せて、血走りし目は窪み、灰色の頬ほは落ちたり。相沢の助にて日々の生計たつきには窮せざりしが、此恩人は彼を精神的に殺しゝなり。
				後に聞けば彼は相沢に逢ひしとき、余が相沢に与へし約束を聞き、またかの夕べ大臣に聞え上げし一諾を知り、俄にはかに座より躍り上がり、面色さながら土の如く、「我豊太郎ぬし、かくまでに我をば欺き玉ひしか」と叫び、その場に僵たふれぬ。相沢は母を呼びて共に扶たすけて床に臥させしに、暫くして醒めしときは、目は直視したるまゝにて傍の人をも見知らず、我名を呼びていたく罵り、髪をむしり、蒲団ふとんを噛みなどし、また遽にはかに心づきたる様にて物を探り討もとめたり。母の取りて与ふるものをば悉こと／″＼く抛なげうちしが、机の上なりし襁褓を与へたるとき、探りみて顔に押しあて、涙を流して泣きぬ。
				これよりは騒ぐことはなけれど、精神の作用は殆ほとんど全く廃して、その痴ちなること赤児の如くなり。医に見せしに、過劇なる心労にて急に起りし「パラノイア」といふ病やまひなれば、治癒の見込なしといふ。ダルドルフの癲狂院てんきやうゐんに入れむとせしに、泣き叫びて聴かず、後にはかの襁褓一つを身につけて、幾度か出しては見、見ては欷歔ききよす。余が病牀をば離れねど、これさへ心ありてにはあらずと見ゆ。たゞをり／＼思ひ出したるやうに「薬を、薬を」といふのみ。
				余が病は全く癒えぬ。エリスが生ける屍かばねを抱きて千行ちすぢの涙を濺そゝぎしは幾度ぞ。大臣に随ひて帰東の途に上ぼりしときは、相沢と議はかりてエリスが母に微かすかなる生計たつきを営むに足るほどの資本を与へ、あはれなる狂女の胎内に遺しゝ子の生れむをりの事をも頼みおきぬ。
				嗚呼、相沢謙吉が如き良友は世にまた得がたかるべし。されど我脳裡なうりに一点の彼を憎むこゝろ今日までも残れりけり。
			</p>
		</div>
	);
};

export default Page;
