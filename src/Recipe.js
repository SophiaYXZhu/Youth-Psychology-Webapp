import React from "react";
import "./Recipe.css";
import RecipePanel from './RecipePanel';
import recipeHead from './img/recipe_bg_head.png';
import recipeFoot from './img/recipe_bg_foot.PNG';
import recipe1Food1 from './img/recipe1_food1.jpg';
import recipe1Food2 from './img/recipe1_food2.gif';
import recipe1Food3 from './img/recipe1_food3.PNG';
import recipe1Food4 from './img/recipe1_food4.PNG';
import recipe1Food5 from './img/recipe1_food5.png';
import recipe2Food1 from './img/recipe2_food1.PNG';
import recipe2Food2 from './img/recipe2_food2.PNG';
import recipe2Food3 from './img/recipe2_food3.PNG';
import recipe3Food1 from './img/recipe3_food1.PNG';
import recipe3Food2 from './img/recipe3_food2.PNG';
import recipe3Food3 from './img/recipe3_food3.PNG';
import recipe3Food4 from './img/recipe3_food4.PNG';
import recipe4Food1 from './img/recipe4_food1.png';
import recipe4Food2 from './img/recipe4_food2.PNG';
import recipe4Food3 from './img/recipe4_food3.PNG';
import recipe4Food4 from './img/recipe4_food4.PNG';
import recipe4Food5 from './img/recipe4_food5.png';
import recipe4Food6 from './img/recipe4_food6.PNG';
import recipe4Food7 from './img/recipe4_food7.PNG';
import recipe5Food1 from './img/recipe5_food1.PNG';
import recipe5Food2 from './img/recipe5_food2.PNG';
import recipe5Food3 from './img/recipe5_food3.png';
import recipe5Food4 from './img/recipe5_food4.PNG';
import recipe5Food5 from './img/recipe5_food5.PNG';
import recipe6Food1 from './img/recipe6_food1.PNG';
import recipe6Food2 from './img/recipe6_food2.PNG';
import recipe6Food3 from './img/recipe6_food3.PNG';
import recipe6Food4 from './img/recipe6_food4.PNG';
import recipe6Food5 from './img/recipe6_food5.PNG';
import recipe6Food6 from './img/recipe6_food6.PNG';
import recipe6Food7 from './img/recipe6_food7.PNG';
import recipe6Food8 from './img/recipe6_food8.PNG';
import recipe6Food9 from './img/recipe6_food9.PNG';
import recipe6Food10 from './img/recipe6_food10.PNG';
import recipe6Food11 from './img/recipe6_food11.PNG';
import recipe6Food12 from './img/recipe6_food12.PNG';
import recipe6Food13 from './img/recipe6_food13.PNG';
import recipe6Food14 from './img/recipe6_food14.PNG';
import recipe6Food15 from './img/recipe6_food15.PNG';
import recipe6Food16 from './img/recipe6_food16.PNG';
import recipe6Food17 from './img/recipe6_food17.PNG';
import recipe7Food1 from './img/recipe7_food1.PNG';
import recipe7Food2 from './img/recipe7_food2.PNG';
import recipe7Food3 from './img/recipe7_food3.PNG';
import recipe7Food4 from './img/recipe7_food4.PNG';
import recipe7Food5 from './img/recipe7_food5.PNG';


function Recipe(id) {
    const RECIPE_LIST = [
        {
            id: 1,
            content: 
            <>
                <div className="parallel" style={{marginTop: "12%"}}>
                    <RecipePanel param={["糍粑", "糍粑是用糯米蒸熟捣烂后所制成的一种食品，是中国南方一些地区流行的美食。在古代，糍粑是南方传统的节日祭品，是农民用来祭牛神的供品。俗语“十月朝，糍粑禄禄烧”，就是指的祭祀事件。糍粑因为属于谷物制品，热量较多，在小雪这样寒冷的天气里也能令人暖和起来。", recipe1Food1]} />
                    <RecipePanel param={["刨汤", "小雪前后，乡村人民会开始一年一度的“杀年猪，迎新年”民俗活动，给寒冷的冬天增添了热烈的气氛。吃“刨汤”，是土家族的风俗习惯；在“杀年猪，迎新年”民俗活动中，用热气尚存的上等新鲜猪肉，精心烹饪而成的美食称为“刨汤”，很适合冬季养生食用。", recipe1Food2]} />
                    <RecipePanel param={["腊肉", "小雪时台湾中南部海边的渔民们会开始晒鱼干、储存乾粮。乌鱼群会在小雪前后来到台湾海峡，另外还有旗鱼、沙鱼等。台湾俗谚：十月豆，肥到不见头，是指在嘉义县布袋一带，到了农历十月可以捕到“豆仔鱼”。", recipe1Food3]} />
                </div>
                <div className="parallel">
                    <RecipePanel param={["鱼干", "小雪时台湾中南部海边的渔民们会开始晒鱼干、储存乾粮。乌鱼群会在小雪前后来到台湾海峡，另外还有旗鱼、沙鱼等。台湾俗谚：十月豆，肥到不见头，是指在嘉义县布袋一带，到了农历十月可以捕到“豆仔鱼”。", recipe1Food4]} />
                    <RecipePanel param={["腌菜", "与腊肉相同，腌菜也是一种烟熏制品，可以放很久。老南京有句俗语，“小雪腌菜，大雪腌肉”。冬天新鲜蔬菜很少，价格也贵，因此大家习惯于在小雪前后腌菜，冬天就靠着这些腌制食品下饭。", recipe1Food5]} />
                </div>
            </>,
        },
        {
            id: 2,
            content:
            <>
                <div className="panel-parallel" style={{marginTop:"17%"}}>
                    <RecipePanel param={["羊肉", "说到冬天吃羊肉，大家应该都不陌生，吃羊肉除了因为需要保暖，也是因为在古代，冬天的菜品很少，同时也临近过年，所以需要吃一些肉类。", recipe2Food1]} />
                    <RecipePanel param={["莲藕", "莲藕对于中医的意义非常大。莲藕富含铁、钙等微量元素、植物蛋白质、维生素及淀粉,有明显的补益气血,故中医称其“主补中养神,益气力”。其性寒,有清热凉血作用,可用来治疗热性病症;莲藕味甘多液,对热病口渴、咯血、衄血、下血者尤为有益。大雪节气吃莲藕首先来说可以补充丰富的维生素和微量元素，可以有止咳化痰的作用，还可以润肠通便，对于养神养心有一定的作用。", recipe2Food2]} />
                    <RecipePanel param={["红薯", "红薯含有大米、面粉缺乏的赖氨酸,赖氨酸可促进人体上皮细胞的成熟,一直抗癌因子与细胞中蛋白质的结合,可提高人体抵抗力,秋冬吃红薯还有防燥的功效，但不能多吃。因为红薯属于碳水化合物，吃多了容易消化不良，所以对老年人来说，适量吃红薯是非常重要的。", recipe2Food3]} />
                </div>
            </>,
        },
        {
            id: 3,
            content:
            <>
                <div className="panel-parallel" style={{marginTop: "9%"}}>
                    <RecipePanel param={["饺子与馄饨", "北方吃饺子，南方吃馄饨已经成为了中国人民的习俗之一。传说，冬至吃饺子是为了纪念医圣张仲景。一次，张仲景辞官回乡时，看到乡亲们饥寒交迫，于是便搭起医棚，将羊肉和驱寒药材放在锅里煮，然后将羊肉、药材捞出来切碎，用面皮包成耳朵样子的“娇耳”，将祛寒娇耳汤分给乡亲们。流传至今，这种食物也被叫做饺子。", recipe3Food1]} />
                    <RecipePanel param={["羊肉汤", "羊肉热量比牛肉高，因此是寒冷的冬天菜品中的不二之选。喝一碗暖暖的羊肉汤，让自己暖和、开心起来吧！", recipe3Food2]} />
                </div>
                <div className="panel-parallel">
                    <RecipePanel param={["汤圆", "不仅元宵节要吃汤圆，冬至夜要吃汤圆。冬至是一年中白天最短的一天，所以大家需要早点回家，与家人们围着一桌吃汤圆也象征着团员。", recipe3Food3]} />
                    <RecipePanel param={["赤豆糯米饭等", "这种食物也源于民间传说。古代人认为冬至的这一天会出现一种怪物，而这种怪物非常害怕红豆，因此很多人都会把家中的坚果肉类与糯米红豆混在一起一锅炖，就形成了红豆糯米饭这一食物。这里也分享一个关于冬至的有趣解读：冬至是一年中白天最短的节气，这也说明从冬至开始，白天会变得越来越长，因此人们对冬至的到来向来是抱有正面的心态的，大家往往认为，冬至之后，一切都会变好。", recipe3Food4]} />
                </div>
            </>,
        },
        {
            id: 4,
            content:
            <>
                <div className="panel-parallel" style={{marginTop:"6%"}}>
                    <RecipePanel param={["梨子", "惊蛰吃梨是北方的民间习俗。农民在惊蛰日要吃梨，意为与害虫别离。春回大地，气候比较干燥，很容易使人口干舌燥。生梨性寒味甘，有润肺止咳、滋阴清热的功效，所以梨特别适合在这个季节食用。", recipe4Food1]} />
                    <RecipePanel param={["蛋", "除了吃梨，民间还有惊蛰吃蛋的说法，据说是因为惊蛰这一天要祭祀白虎，而白虎通常獠牙张嘴，只有以蛋喂食，饱食后它就不会伤人了。而经过演变，当初喂给白虎的鸡蛋，如今变成了喂给人们自己啦。每星期不宜吃超过三只蛋黄，蛋白则不在此限，而且每天不应摄取超过300毫克胆固醇。原来蛋白不含脂肪，也不含胆固醇，是接近纯蛋白质的食物，所以蛋白的摄取量不像蛋黄般受限制。", recipe4Food2]} />
                    <RecipePanel param={["炒豆", "在陕西，一些地区过惊蛰要吃炒豆。人们将黄豆用盐水浸泡后放在锅中爆炒，发出噼啪之声，象征虫子在锅中受热煎熬时的蹦跳之声。黄豆真的是价廉物美，对于女人来说，它含有的异黄酮素又能产生与雌激素荷尔蒙相似的效用，降低血液胆固醇，保护心脏，预防乳癌骨质疏松的情况。", recipe4Food3]} />
                    <RecipePanel param={["玉米", "在少数民族地区，广西金秀县的瑶族在惊蛰日家家户户要吃“炒虫”，“虫”炒熟后，放在厅堂中，全家人围坐一起大吃，还要边吃边喊：“吃炒虫了，吃炒虫了！”尽兴处还要比赛，谁吃得越快，嚼得越响，大家就来祝贺他为消灭害虫立了功。其实“虫”就是玉米，是取其象征意义。玉米是很多人非常喜欢的食品，美味可口，营养价值高。它含纤维素特别高，而纤维素可加速肠道蠕动，降低胆固醇吸收，预防冠心病。此外，玉米中还含有大量镁，镁可加强肠壁蠕动，促进机体废物的排泄，对于减肥非常有利。", recipe4Food4]}/>
                </div>
                <div className="panel-parallel" style={{marginBottom:"3%"}}>
                    <RecipePanel param={["芋头", "赣南闽西一带的客家人，在惊蛰这天要在热水中煮带毛的芋子、炒黄豆(代表消灭多种虫害)。中医认为芋头可补中益气，因其含有丰富的黏液皂素及多种微量元素，可帮助机体纠正微量元素缺乏导致的生理异常，同时能增进食欲，帮助消化。", recipe4Food5]} />
                    <RecipePanel param={["醪酒", "春天到来，人的全身汗毛孔也开了，西北有些地方在惊蛰节要家家户户喝醪酒、吃鸡蛋煎饼拌芥末汁，驱除身体积存的寒气。醪酒的制作方法简便而有独特的技巧，须得有匠人专酿，并非人人都会。先将糯米用水淘进杂质，再浸泡温水中约十二小时，搭出上笼蒸熟，倒在未使用过的油脂肉类的净案板上，凉冷，用蒸了米的蒸锅水撒在米上，使米的适量的甜酒曲，装入瓷盆，放在约摄氏50度的热炕上，用干净棉褥盖严，过一昼夜半，揭开被褥，就可以闻到浓郁的酒香气味，说明醪酒已经酿成，连盆放到冷凉处，准备食用。", recipe4Food6]} />
                    <RecipePanel param={["煎饼", "在山东的一些地区，农民在惊蛰日要在庭院之中生火炉烙煎饼，意为烟熏火燎整死了害虫。煎饼因是用原粮制作，麸皮没有去掉，所以营养丰富，吃起来香酥松柔，且便于存放和携带，是一种极富特色的地方食品。有人认为，食用煎饼需要较长时间的咀嚼，因而可生津健胃，促进食欲，促进面部神经运动，有益于保持视觉、听觉和嗅觉神经的健康，减缓衰老，不失为一种保健食品。", recipe4Food7]} />
                </div>
            </>,
        },
        {
            id: 5,
            content:
            <>
                <div className="panel-parallel" style={{marginTop:"6%"}}>
                    <RecipePanel param={["蜂蜜", "食蜂蜜是不错的选择，蜂蜜味甘，入脾胃二经，补中益气，润肠通便。事实上，蜂蜜富含丰富的为人体代谢所必需的矿物质和维生素，经常饮用，也能适当增加人的免疫力。所以，每天或早或晚，温开水冲服一至两匙蜂蜜称得上是简易的食疗好方法。", recipe5Food1]} />
                    <RecipePanel param={["红枣等养脾甜食", "古有云：“春日宜省酸增甘，以养脾气。”意思是说，春季宜少吃酸的，多吃甜的。专家认为春季为肝气旺盛之时，多食酸味食品会使肝气过盛而损害脾胃，所以应少食酸味食品。而人们在春天里的户外活动比冬天增多，体力消耗较大，需要的热量增多。但此时脾胃偏弱，胃肠的消化能力较差，不适合多吃油腻的肉食，因此，热量可适当由甜食供应。红枣正是这样一味春季养脾佳品。", recipe5Food2]} />
                    <RecipePanel param={["红糖", "中医认为，红糖味甘，入脾胃二经，能补中益气、润肠通便。春季气候多变，天气乍寒还暖，人就容易感冒。由于红糖含有多种矿物质、维生素，还有清肺解毒的功能，故能增强人体免疫力，是春季最理想的滋补品。因此，在春季，如果每天能饮用1-2匙红糖，以一杯温开水冲服或加牛奶服用，对身体有滋补的作用。在陕西，一些地区过惊蛰要吃炒豆。人们将黄豆用盐水浸泡后放在锅中爆炒，发出噼啪之声，象征虫子在锅中受热煎熬时的蹦跳之声。黄豆真的是价廉物美，对于女人来说，它含有的异黄酮素又能产生与雌激素荷尔蒙相似的效用，降低血液胆固醇，保护心脏，预防乳癌骨质疏松的情况。", recipe5Food3]} />
                </div>
                <div className="panel-parallel" style={{marginBottom:"3%"}}>
                    <RecipePanel param={["春芽", "春日食春芽。孔子说“不时，不食”，意思是，不是这个季节的（东西）就不吃。中医经典着作《黄帝内经》也说要“食岁谷”，就是要吃时令食物。春天里所有的植物都生发出鲜绿的嫩芽，可以食用的春芽有很多，如香椿、豆芽、蒜苗、豆苗、莴苣等。", recipe5Food4]} />
                    <RecipePanel param={["樱桃", "素有“春果第一枝”的美誉，目前在我国各地都有栽培。樱桃果实肉厚，味美多汁，色泽鲜艳，营养丰富，其铁的含量尤为突出，超过柑橘、梨和苹果20倍以上，居水果首位。樱桃性温，味甘微酸，具有补中益气，调中益颜，健脾开胃的功效。春食樱桃可发汗、益气、祛风及透疹。需注意的是，樱桃属火，不可多食，身体阴虚火旺应忌食或少食。吃不了樱桃，草莓也是很不错的选择。", recipe5Food5]} />
                </div>
            </>,
        },
        {
            id: 6,
            content:
            <>
                <div className="panel-parallel" style={{marginTop:"6%"}}>
                    <RecipePanel param={["青团子", "清明时节，江南一带有吃青团子的风俗习惯。青团子是用一种名叫“浆麦草”的野生植物捣烂后挤压出汁，接着取用这种汁同晾干后的水磨纯糯米粉拌匀揉和，然后开始制作团子。团子的馅心是用细腻的糖豆沙制成，在包馅时，另放入一小块糖猪油。团坯制好后，将它们入笼蒸熟，出笼时用毛刷将熟菜油均匀地刷在团子的表面，这便大功告成了。", recipe6Food1]} />
                    <RecipePanel param={["艾粄", "客家人有句老话，叫“清明前后吃艾粄，一年四季不生病”。艾粄是清明节客家人必备的传统小食。首先是将采摘回来的鲜嫩艾草洗净，放锅中煮熟后捞起，沥干水份，煮艾草的水要保留备用。然后将煮熟的艾草剁成草泥，草泥剁得越细越烂越好。艾草泥剁好后，用煮艾草的水，加上糯米粉一齐和拌成团。然后把准备好的芝麻、眉豆、花生等馅料包进面团里，再封口捏成圆形、长形等形状，放入锅中隔水蒸15-20分钟后即可出炉。", recipe6Food2]} />
                    <RecipePanel param={["暖菇包", "暖菇包是泰宁的传统特色小吃。暖菇原料学名鼠曲草，又叫佛耳草，当地人称为暖菇草。每年清明前夕，田间地头长满鼠曲草，毛茸茸、鲜嫩嫩的，正是采摘的好时节，也是制作暖菇包的好季节。在泰宁，制作暖菇包南北片有些差异。南片制作，用的是新鲜采摘的暖菇草原料，形似圆月，类似包子;北片的用暖菇粉制作，形似弯月，更像水饺。南片的一般在清明前夕吃，图的是新鲜口味，不讲太多规矩。", recipe6Food3]} />
                </div>
                <div className="panel-parallel">
                    <RecipePanel param={["馓子", "我国南北各地清明节有吃馓子的食俗。“馓子”为一油炸食品，香脆精美，古时叫“寒具”。寒食节禁火寒食的风俗在我国大部分地区已不流行，但与这个节日有关的馓子却深受世人的喜爱。现在流行于汉族地区的馓子有南北方的差异：北方馓子大方洒脱，以麦面为主料;南方馓子精巧细致，多以米面为主料。", recipe6Food4]} />
                    <RecipePanel param={["鸡蛋", "民间习俗认为，清明节吃个鸡蛋，一整年都有好身体。清明节吃鸡蛋其源起是先秦时代某些地区有禁火习俗，多日的禁火寒食，煮熟的鸡蛋是度过这一时期的最好的食品储备。清明节这天鸡蛋除了吃，还可以玩，大致分为两种，一种是“画蛋”，另一种则是“雕蛋”。画的五颜六色鸡蛋可以吃;而“雕蛋”则仅供玩赏。", recipe6Food5]} />
                    <RecipePanel param={["子推馍", "“子推馍”，又称老馍馍，类似古代武将的头盔，重约250—500克。里面包鸡蛋或红枣，上面有顶子。顶子四周贴面花。面花是面塑的小馍，形状有燕、虫、蛇、兔或文房四宝。圆形的“子推馍”是专给男人们享用的。已婚妇女吃条形的“梭子馍”，未婚姑娘则吃“抓髻馍”。孩子们有燕、蛇、兔、虎等面花。“大老虎”专给男孩子吃，也最受他们喜欢。", recipe6Food6]} />
                    <RecipePanel param={["薄饼", "厦门民谚有云“清明吃薄饼”，意思是清明节一家人在扫墓后要聚在一起包薄饼吃。如今，闽南多数地方还保留这样的风俗习惯。老厦门人卷薄饼时，一般喜欢在薄饼皮里放点酥了油的海苔、油煎的蛋丝，或抹一点辣酱等，卷后趁热吃更有滋味。其中所包的各种蔬菜，预示着将使农苗兴旺、六畜茁壮，有的地区还认为吃了包卷芹菜、韭菜的薄饼，会使人们更勤(芹)劳，生命更长久(韭)，家业更兴旺。", recipe6Food7]} />
                </div>
                <div className="panel-parallel">
                    <RecipePanel param={["大葱和蛋饼", "清明节，青岛许多人家都要吃大葱和蛋饼，寓意聪明伶俐，这个习俗一直延续至今。此外，旧时青岛地区有的人家还要捏面花，称作“蒸小燕”，吃白面小鸡和鸡蛋。寓意小燕子来了，真正的春天到来了。清明这天早晨全家人一定要吃鸡蛋和白面小鸡，心明眼亮不得病，很多学生要带鸡蛋给老师以表敬仰。", recipe6Food8]} />
                    <RecipePanel param={["朴籽粿", "制作朴籽粿，首先将朴籽树叶和果实(核)捣烂，与大米舂成粉末，然后发酵再配糖，最后再用陶模型蒸或梅花模型蒸熟而成。一般朴籽粿有梅花型和桃型两种，也有叫碗酵桃的。蒸熟的朴籽为草绿色，个个咧开嘴大笑，总是给人春天很美好的感觉。粿品呈浅绿色，味甚甘甜，据说吃了还可解积热，除疾病。", recipe6Food9]} />
                    <RecipePanel param={["芥菜饭", "清明时节，闽东各地无论城乡，大多有吃芥菜的食俗。据说每年二月二吃了用芥菜和大米混煮的“芥菜饭”可以终年不长疥疮。也有在三月三，煮泥鳅面祭祖送人习俗。", recipe6Food10]} />
                </div>
                <div className="panel-parallel">
                    <RecipePanel param={["枣糕", "枣糕又叫“子推饼”，北方一些地方用酵糟发面，夹枣蒸食。他们还习惯将枣饼制成飞燕形，用柳条串起挂在门上，可以冷食，以纪念介子推不求名利的高尚品质。糕就是谷物类，谷物类加上枣，符合春季养生增甘的目的，可以增加脾的功能来限制一下肝气过分的往外张扬。", recipe6Food11]} />
                    <RecipePanel param={["清明饭", "每逢清明节前夕，家家户户都要从野外采集各种供食用的青草药，用来制作清明叛。常用的草药有艾草、?麻叶、鸡矢藤、清明菜(白公翁)、荠菜、枸杞叶等。将需用草药洗净、去梗、煮熟，拌在预先浸透滤干的糯米(加适量大米)中，用碓皿番成饭团，添进红糖搓匀，制成饭块蒸熟即成。", recipe6Food12]} />
                    <RecipePanel param={["子福", "晋中一带还保留着清明前一日禁火的习惯。很多地方在完成祭祀仪式后，将祭祀食品分吃。晋南人过清明时，习惯用白面蒸大馍，中间夹有核桃、枣儿、豆子，外面盘成龙形，龙身中间扎一个鸡蛋，名为“子福”。要蒸一个很大的总“子福”，象征全家团圆幸福。上坟时，将总“子福”献给祖灵，扫墓完毕后全家分食之。", recipe6Food13]} />
                    <RecipePanel param={["菠菠粿", "清明节前后，福州家家户户都要做菠菠粿，如今，街上“米时”粿店也大量出售菠菠粿。是用菠菠菜(生长于南方的一种野菜，可食，味甘，性凉，捣烂压成汁呈青绿色)压榨成汁，渗入米浆内揉成粿皮，以枣泥、豆沙、萝卜丝等为馅捏制而成的。造型比较简单，菠菠菜的青绿色赋予菠菠粿以春天的绿意。", recipe6Food14]} />
                </div>
                <div className="panel-parallel" style={{marginBottom:"3%"}}>
                    <RecipePanel param={["欢喜团", "四川成都一带有以炒米作团，用线穿之，或大或小，各色点染，名曰“欢喜团”。旧时，在成都北门外至“欢喜庵”一路摆卖。清人《绵城竹枝词》有诗云：“‘欢喜庵’前欢喜团，春郊买食百忧宽。村醪戏比金生丽，偏有多人醉脚盆。”", recipe6Food15]} />
                    <RecipePanel param={["乌稔饭", "另外，关于清明食俗，不能不提到畲家的“乌稔饭”，因为闽东是畲族聚居地。每年三月初三，畲族人家家户户煮“乌稔饭”，并馈赠汉族的亲戚朋友，久而久之，当地的汉族人民也有了清明时食“乌稔饭”的习俗。特别是枯荣县民间，每年都须用“乌稔饭”祭祀，可见我国自古以来就是一个民族和睦相处的大家庭。", recipe6Food16]} />
                    <RecipePanel param={["润饼菜", "每到清明时节，泉州人有吃“润饼菜”的风俗。据说，这是古时寒食节食俗之遗风。泉州的“润饼菜”是以面粉为原料擦制烘成薄皮，俗称“润饼”或“擦饼”，食时铺开饼皮，再卷胡萝卜丝、肉丝、蚵煎、芜荽等混锅菜肴，制食皆简单，吃起来甜润可口。", recipe6Food17]} />
                </div>
            </>
        },
        {
            id: 7,
            content:
            <>
                <div className="panel-parallel" style={{marginTop:"6%"}}>
                    <RecipePanel param={["香椿", "俗语说：“雨前椿芽嫩无比，雨后椿芽生木体”。谷雨前后的一段时间正是香椿上市的时节，此时的香椿，新芽初绽，紫红的肥叶泛着嫩绿，油亮厚实，散发出特有的清香，是时下最时令的金贵菜肴。香椿一般分为紫椿芽、绿椿芽，尤以紫椿芽最佳。香椿中含有丰富的蛋白质、脂肪、糖以及维生素C等，营养以及药用价值十分可观，可提高身体抵抗力，具有理气、健胃、润肤、抗菌、消炎等功效。除此之外，民间还流行一种说法，就是过了谷雨之后香椿芽就不好吃了，这是因为随着谷雨之后气温的升高，香椿芽“木质化”加快，口感会一天不如一天。", recipe7Food1]} />
                    <RecipePanel param={["谷雨茶", "“谷雨茶”是谷雨节气里所采制的春茶，俗称“二春茶”，谷雨前采摘的茶细嫩清香，经过热水的冲泡以后，散发出来的香气十分怡人，喝起来口感醇香绵和，味道最佳，故谷雨品新茶，相沿成习。而且传说谷雨这天的茶喝了会清火，辟邪，明目等，所以南方有谷雨摘茶习俗，谷雨这天不管是什么天气，人们都会去茶山摘一些新茶回来喝，以祈求健康。", recipe7Food2]} />
                    <RecipePanel param={["燕来笋", "燕来笋即燕子来时出土之嫩笋，称燕笋，也就是春笋。春笋鲜嫩，壳呈褐色，身长，笋肉呈乳黄色，其味甘淡，营养丰富，是烹饪美味佳肴必不可少的蔬菜。笋含有丰富的蛋白质、膳食纤维、多种氨基酸、维生素和钙、铁、磷等微量元素，营养价值极高，能有效促进肠胃的蠕动，帮助消化，有助于预防便秘现象。此外，春笋的热量很低，具有良好的减肥效果。笋除熬汤之外，也有作“油炯笋”和“笋油”的吃法，都为谷雨节气的时令菜。", recipe7Food3]} />
                </div>
                <div className="panel-parallel" style={{marginBottom:"3%"}}>
                    <RecipePanel param={["桃花鳜鱼", "在谷雨时节，你不得不吃的就是鳜鱼了。鳜鱼，又名石桂鱼、桂鱼，美称锦袍氏。鳜鱼肉质细嫩，刺少而肉多，其肉呈瓣状，味道鲜美，向为鱼中之佳品。唐代诗人张志和的《渔歌子》中便有“桃花流水鳜鱼肥”之名句，可见鳜鱼的鲜美，在唐代便已尽人皆知。三月间正是桂鱼产卵期，故鱼肉丰满，肉质细嫩，而且营养均高于其他季节。除清蒸以外，红烧鳜鱼、锡箔铁板鳜鱼、松鼠鳜鱼也是美味中的极品。", recipe7Food4]} />
                    <RecipePanel param={["乌米饭", "每年谷雨时节，肇兴侗寨有“吃乌米、打花脸、播稻种”习俗。在谷雨这天，侗族习惯用乌饭树叶汁浸泡糯米，蒸成乌米饭。后来，乌米饭就像汉族的“喜糖”一样，成为了侗族定亲的吉祥物。在谷雨这天，青年男子都会到姑娘家扔竹篓，讨要乌米饭，去的人越多，姑娘的家人越觉得有面子，它是当地农耕文化与婚恋习俗的双重寓意表达。", recipe7Food5]} />
                </div>
            </>,
        },
    ]

    return (
        <>
            {RECIPE_LIST[id-1].content}
            <img src={recipeHead} width="100%" height="auto" style={{marginTop:"60px", position:"fixed", top:"0"}}/>
            <img src={recipeFoot} width="100%" height="auto" style={{bottom:"0", position:"fixed"}}/>
        </>
    )
}


export default Recipe;