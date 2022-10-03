const ObjectAssign = function (target, varArgs) { // .length of function is 2
  if (target == null) { // TypeError if undefined or null
    throw new TypeError('Cannot convert undefined or null to object');
  }

  var to = target;

  for (var index = 1; index < arguments.length; index++) {
    var nextSource = arguments[index];

    if (nextSource != null) { // Skip over if undefined or null
      for (var nextKey in nextSource) {
        // Avoid bugs when hasOwnProperty is shadowed
        if (nextSource.hasOwnProperty(nextKey)) {
          to[nextKey] = nextSource[nextKey];
        }
      }
    }
  }
  return to;
};

const itemProps = [
  "id",
  "Key",
  "enUS",
  "zhTWcolor",
  "zhCN",
  "zhTW",
  "zhCNcolor",
  "deDE",
  "esES",
  "frFR",
  "itIT",
  "koKR",
  "plPL",
  "esMX",
  "jaJP",
  "ptBR",
  "ruRU"
]

function propsReplaceFn(props, replaceFn, props2, replaceFn2) {
  return function(item) {
    if (props && props.length>0) {
      for(let i=0; i<props.length; i++) {
        let prop = props[i]
        let value = item[prop]
        let new_value = replaceFn(value)
        item[prop] = new_value
      }
    }
    if (props2 && props2.length>0) {
      for(let i=0; i<props2.length; i++) {
        let prop2 = props2[i]
        let value2 = item[prop2]
        let new_value2 = replaceFn2(value2)
        item[prop2] = new_value2
      }
    }
  }
}

const allZH = ['zhCN','zhCNcolor','zhTW','zhTWcolor'];
const allCN = ['zhCN','zhCNcolor'];
const allTW = ['zhTW','zhTWcolor'];

const replaceTargets_attrAbbreviation = {
  'ItemStats1d': propsReplaceFn(allZH, v=>v.replace(/(耐久度):/, '$1(DUR):')),
  'ModStr1a': propsReplaceFn(allZH, v=>v.replace(/(力量)$/, '$1(STR)')),
  'ModStr1b': propsReplaceFn(allZH, v=>v.replace(/(敏捷)$/, '$1(DEX)')),
  'ModStr1c': propsReplaceFn(allZH, v=>v.replace(/(活力|體能)$/, '$1(VIT)')),
  'ModStr1d': propsReplaceFn(allZH, v=>v.replace(/(能量)$/, '$1(ENG)')),
  'ModStr1e': propsReplaceFn(allZH, v=>v.replace(/(法力)$/, '$1(Mana)')),
  'ModStr1f': propsReplaceFn(allZH, v=>v.replace(/(最大.害)/, '$1(Max)')),
  'ModStr1g': propsReplaceFn(allZH, v=>v.replace(/(最小.害)$/, '$1(Min)')),
  'ModStr1h': propsReplaceFn(allZH, v=>v.replace(/(命中值|準確率)/, '$1(AR)')),
  'ModStr1i': propsReplaceFn(allZH, v=>v.replace(/(防御|防禦)/, '$1(DEF)')),
  'ModStr1j': propsReplaceFn(allZH, v=>v.replace(/(火焰抗性)/, '$1(FR)')),
  'ModStr1k': propsReplaceFn(allZH, v=>v.replace(/(冰霜抗性|冰寒抗性)/, '$1(CR)')),
  'ModStr1l': propsReplaceFn(allZH, v=>v.replace(/(闪电抗性|電擊抗性)/, '$1(LR)')),
  'ModStr1m': propsReplaceFn(allZH, v=>v.replace(/(魔法抗性)/, '$1(MR)')),
  'ModStr1n': propsReplaceFn(allZH, v=>v.replace(/(毒素抗性)/, '$1(PR)')),
  'ModStr1o': propsReplaceFn(allZH, v=>v.replace(/(最大火焰伤害|火焰傷害最大值)/, '$1(Max FD)')),
  'ModStr1p': propsReplaceFn(allZH, v=>v.replace(/(最小火焰伤害|火焰傷害最小值)/, '$1(Min FD)')),
  'ModStr1q': propsReplaceFn(allZH, v=>v.replace(/(最大闪电伤害|電擊傷害最大值)/, '$1(Max LD)')),
  'ModStr1r': propsReplaceFn(allZH, v=>v.replace(/(最小闪电伤害|電擊傷害最小值)/, '$1(Min LD)')),
  'ModStr1s': propsReplaceFn(allZH, v=>v.replace(/(最大冰霜伤害|冰寒傷害最大值)/, '$1(Max CD)')),
  'ModStr1t': propsReplaceFn(allZH, v=>v.replace(/(最小冰霜伤害|冰寒傷害最小值)/, '$1(Min CD)')),
  'ModStr1u': propsReplaceFn(allZH, v=>v.replace(/(生命)/, '$1(Life)')),
  'ModStr1y': propsReplaceFn(allZH, v=>v.replace(/(击退|擊退)/, '$1(KB)')),
  'ModStr2g': propsReplaceFn(allZH, v=>v.replace(/(生命最大值|生命上限提高)/, '$1(Max Life)')),
  'ModStr2h': propsReplaceFn(allZH, v=>v.replace(/(法力最大值|法力上限提高)/, '$1(Max Mana)')),
  'ModStr2i': propsReplaceFn(allZH, v=>v.replace(/(最大耐久度|耐久度上限提高)/, '$1(Max DUR)')),
  'ModStr2j': propsReplaceFn(allZH, v=>v.replace(/(强化最大伤害|最大傷害強化)/, '$1(Max)')),
  'ModStr2k': propsReplaceFn(allZH, v=>v.replace(/(强化最小伤害|最小傷害強化)/, '$1(Min)')),
  'ModStr2l': propsReplaceFn(allZH, v=>v.replace(/(补充生命|生命回復)/, '$1(Life Rep)')),
  'ModStr2m': propsReplaceFn(allZH, v=>v.replace(/(补充法力|回復法力)/, '$1(Mana Rep)')),
  'ModStr2t': propsReplaceFn(allZH, v=>v.replace(/(魔法伤害降低|魔法傷害降低)/, '$1(MDR)')),
  'ModStr2u': propsReplaceFn(allZH, v=>v.replace(/(伤害降低|傷害降低)/, '$1(DR)')),
  'Modstr2v': propsReplaceFn(allZH, v=>v.replace(/(强化防御|防禦強化)/, '$1(EDef)')),
  'ModStr2y': propsReplaceFn(allZH, v=>v.replace(/(击中时偷取法力|擊中竊取.*法力)/, '$1(LM)')),
  'ModStr2z': propsReplaceFn(allZH, v=>v.replace(/(击中时偷取生命|擊中竊取.*生命)/, '$1(LL)')),
  'ModStr3a': propsReplaceFn(allZH, v=>v.replace(/(亚马逊.*|亞馬遜.*)$/, '$1(AMA)')),
  'ModStr3b': propsReplaceFn(allZH, v=>v.replace(/(圣骑士.*|聖騎士.*)$/, '$1(PAL)')),
  'ModStr3c': propsReplaceFn(allZH, v=>v.replace(/(死靈.*|死灵.*)$/, '$1(NEC)')),
  'ModStr3d': propsReplaceFn(allZH, v=>v.replace(/(.*)$/, '$1(SOR)')),
  'ModStr3e': propsReplaceFn(allZH, v=>v.replace(/(野蛮人.*|野蠻人.*)$/, '$1(BAR)')),
  'ModStr3f': propsReplaceFn(allZH, v=>v.replace(/(照亮范围|照亮範圍)/, '$1(Light Radius)')),
  'ModStr3g': propsReplaceFn(allZH, v=>v.replace(/(格挡几率提高|格擋機率提高)/, '$1(CTB)')),
  'ModStr3h': propsReplaceFn(allZH, v=>v.replace(/(需求)/, '$1(REQ)')),
  'ModStr3k': propsReplaceFn(allZH, v=>v.replace(/(所有技能.*)$/, '$1(All Skills)')),
  'ModStr3l': propsReplaceFn(allZH, v=>v.replace(/(冻结目标|凍結目標)/, '$1(FT)')),
  'ModStr3m': propsReplaceFn(allZH, v=>v.replace(/(開放傷口|开创性伤口)/, '$1(OW)')),
  'ModStr3r': propsReplaceFn(allZH, v=>v.replace(/(中毒时间缩短|中毒的時效縮短)/, '$1(PLR)')),
  'ModStr3v': propsReplaceFn(allZH, v=>v.replace(/(治愈耐力外加|精力恢復)/, '$1(Heal STA)')),
  'ModStr3w': propsReplaceFn(allZH, v=>v.replace(/(受到的伤害转换为法力|受到的傷害轉為法力)/, '$1(DTM)')),
  'ModStr3y': propsReplaceFn(allZH, v=>v.replace(/(忽略目标的防御|無視目標防禦)/, '$1(ITD)')),
  'ModStr3z': propsReplaceFn(allZH, v=>v.replace(/(中毒时间减半|中毒的時效減半)/, '$1(HPD)')),
  'ModStr4a': propsReplaceFn(allZH, v=>v.replace(/(防止怪物治愈|防止怪物自療)/, '$1(PMH)')),
  'ModStr4b': propsReplaceFn(allZH, v=>v.replace(/(冻结时间减半|被凍結的時效減半)/, '$1(HFD)')),
  'ModStr4e': propsReplaceFn(allZH, v=>v.replace(/(对恶魔的伤害|對惡魔的傷害)/, '$1(DTD)')),
  'ModStr4f': propsReplaceFn(allZH, v=>v.replace(/(对亡灵的伤害|對不死怪物的傷害)/, '$1(DTU)')),
  'ModStr4g': propsReplaceFn(allZH, v=>v.replace(/(法力回复|法力恢復)/, '$1(Reg Mana)')),
  'ModStr4h': propsReplaceFn(allZH, v=>v.replace(/(最大毒素伤害|毒素傷害最大值)/, '$1(Max PD)')),
  'ModStr4i': propsReplaceFn(allZH, v=>v.replace(/(最小毒素伤害|毒素傷害最小值)/, '$1(Min PD)')),
  'ModStr4j': propsReplaceFn(allZH, v=>v.replace(/(对恶魔的命中值|對惡魔的準確率)/, '$1(DAR)')),
  'ModStr4k': propsReplaceFn(allZH, v=>v.replace(/(对亡灵的命中值|對不死怪物的準確率)/, '$1(UAR)')),
  'ModStr4l': propsReplaceFn(allZH, v=>v.replace(/(轻微提升攻击速度|小幅攻擊速度提高)/, '$1(IAS)')),
  'ModStr4m': propsReplaceFn(allZH, v=>v.replace(/(攻击速度|攻擊速度)/, '$1(IAS)')),
  'ModStr4n': propsReplaceFn(allZH, v=>v.replace(/(大幅提高攻击速度|大幅攻擊速度提高)/, '$1(IAS)')),
  'ModStr4o': propsReplaceFn(allZH, v=>v.replace(/(打击回复|打擊恢復)/, '$1(FHR)')),
  'ModStr4p': propsReplaceFn(allZH, v=>v.replace(/(打击回复|打擊恢復)/, '$1(FHR)')),
  'ModStr4q': propsReplaceFn(allZH, v=>v.replace(/(打击回复|打擊恢復)/, '$1(FHR)')),
  'ModStr4r': propsReplaceFn(allZH, v=>v.replace(/(.*)$/, '$1(FRW)')),
  'ModStr4s': propsReplaceFn(allZH, v=>v.replace(/(.*)$/, '$1(FRW)')),
  'ModStr4t': propsReplaceFn(allZH, v=>v.replace(/(.*)$/, '$1(FRW)')),
  'ModStr4u': propsReplaceFn(allZH, v=>v.replace(/(快速施法|施法速度)/, '$1(FCR)')),
  'ModStr4v': propsReplaceFn(allZH, v=>v.replace(/(快速施法|施法速度)/, '$1(FCR)')),
  'ModStr4w': propsReplaceFn(allZH, v=>v.replace(/(快速施法|施法速度)/, '$1(FCR)')),
  'ModStr4x': propsReplaceFn(allZH, v=>v.replace(/(快速格挡|格擋速度)/, '$1(FBR)')),
  'ModStr4y': propsReplaceFn(allZH, v=>v.replace(/(快速格挡|格擋速度)/, '$1(FBR)')),
  'ModStr4z': propsReplaceFn(allZH, v=>v.replace(/(快速格挡|格擋速度)/, '$1(FBR)')),
  'ModStr5b': propsReplaceFn(allZH, v=>v.replace(/(伤害|傷害)/, '$1(DMG)')),
  'ModStr5c': propsReplaceFn(allZH, v=>v.replace(/(粉碎打击|粉碎打擊)/, '$1(CB)')),
  'ModStr5f': propsReplaceFn(allZH, v=>v.replace(/(每次消灭恢复的法力|擊殺法力恢復)/, '$1(EK)')),
  'ModStr5g': propsReplaceFn(allZH, v=>v.replace(/(火焰伤害吸收|火焰吸收)/, '$1(FA)')),
  'ModStr5h': propsReplaceFn(allZH, v=>v.replace(/(火焰伤害吸收|火焰吸收)/, '$1(FA)')),
  'ModStr5i': propsReplaceFn(allZH, v=>v.replace(/(闪电伤害吸收|電擊吸收)/, '$1(LA)')),
  'ModStr5j': propsReplaceFn(allZH, v=>v.replace(/(闪电伤害吸收|電擊吸收)/, '$1(LA)')),
  'ModStr5k': propsReplaceFn(allZH, v=>v.replace(/(魔法伤害吸收|魔法吸收)/, '$1(MA)')),
  'ModStr5l': propsReplaceFn(allZH, v=>v.replace(/(魔法伤害吸收|魔法吸收)/, '$1(MA)')),
  'ModStr5m': propsReplaceFn(allZH, v=>v.replace(/(冰霜伤害吸收|冰寒吸收)/, '$1(CA)')),
  'ModStr5n': propsReplaceFn(allZH, v=>v.replace(/(冰霜伤害吸收|冰寒吸收)/, '$1(CA)')),
  'ModStr5q': propsReplaceFn(allZH, v=>v.replace(/(致死打击|致命打擊)/, '$1(DS)')),
  'ModStr5u': propsReplaceFn(allZH, v=>v.replace(/(火焰抗性上限)/, '$1(Max FR)')),
  'ModStr5v': propsReplaceFn(allZH, v=>v.replace(/(冰霜抗性上限|冰寒抗性上限)/, '$1(Max CR)')),
  'ModStr5w': propsReplaceFn(allZH, v=>v.replace(/(闪电抗性上限|電擊抗性上限)/, '$1(Max LR)')),
  'ModStr5x': propsReplaceFn(allZH, v=>v.replace(/(魔法抗性上限)/, '$1(Max MR)')),
  'ModStr5y': propsReplaceFn(allZH, v=>v.replace(/(毒素抗性上限)/, '$1(Max PR)')),
  'ModStr5z': propsReplaceFn(allZH, v=>v.replace(/(无法被冻结|無法凍結)/, '$1(CBF)')),
  'ModStr6c': propsReplaceFn(allZH, v=>v.replace(/(每次消灭恶魔恢复的生命|擊殺惡魔生命恢復)/, '$1(DLK)')),
  'improved to hit': propsReplaceFn(allZH, v=>v.replace(/(命中值|準確率)/, '$1(AR)')),
  'ModStr5d': propsReplaceFn(allZH, v=>v.replace(/(最大耐力|精力上限)/, '$1(Max STA)')),
  'strModEnhancedDamage': propsReplaceFn(allZH, v=>v.replace(/(强化伤害|傷害強化)/, '$1(EDmg)')),
  'strModAllResistances': propsReplaceFn(allZH, v=>v.replace(/(所有抗性)/, '$1(RES)')),
  'strModAllSkillLevels': propsReplaceFn(allZH, v=>v.replace(/(所有技能.*)$/, '$1(All Skills)')),
  'strModFireDamage': propsReplaceFn(allZH, v=>v.replace(/(火焰伤害|火焰傷害)/, '$1(FD)')),
  'strModFireDamageRange': propsReplaceFn(allZH, v=>v.replace(/(火焰伤害|火焰傷害)/, '$1(FD)')),
  'strModColdDamage': propsReplaceFn(allZH, v=>v.replace(/(冰霜伤害|冰寒傷害)/, '$1(CD)')),
  'strModColdDamageRange': propsReplaceFn(allZH, v=>v.replace(/(冰霜伤害|冰寒傷害)/, '$1(CD)')),
  'strModLightningDamage': propsReplaceFn(allZH, v=>v.replace(/(闪电伤害|電擊傷害)/, '$1(LD)')),
  'strModLightningDamageRange': propsReplaceFn(allZH, v=>v.replace(/(闪电伤害|電擊傷害)/, '$1(LD)')),
  'strModMagicDamage': propsReplaceFn(allZH, v=>v.replace(/(魔法伤害|魔法傷害)/, '$1(MD)')),
  'strModMagicDamageRange': propsReplaceFn(allZH, v=>v.replace(/(魔法伤害|魔法傷害)/, '$1(MD)')),
  'strModPoisonDamage': propsReplaceFn(allZH, v=>v.replace(/(毒素伤害|毒素傷害)/, '$1(PD)')),
  'strModPoisonDamageRange': propsReplaceFn(allZH, v=>v.replace(/(毒素伤害|毒素傷害)/, '$1(PD)')),
  'strModMinDamage': propsReplaceFn(allZH, v=>v.replace(/(伤害|傷害)/, '$1(DMG)')),
  'strModMinDamageRange': propsReplaceFn(allZH, v=>v.replace(/(伤害|傷害)/, '$1(DMG)')),
  'ModStre9j': propsReplaceFn(allZH, v=>v.replace(/(火焰伤害降低|火焰傷害降低)/, '$1(FDR)')),
  'ModStre9k': propsReplaceFn(allZH, v=>v.replace(/(冰霜伤害降低|冰寒傷害降低)/, '$1(CDR)')),
  'ModStre9l': propsReplaceFn(allZH, v=>v.replace(/(闪电伤害降低|電擊傷害降低)/, '$1(LDR)')),
  'ModStre9m': propsReplaceFn(allZH, v=>v.replace(/(毒素伤害降低|毒素傷害降低)/, '$1(PDR)')),
  'ModStre9n': propsReplaceFn(allZH, v=>v.replace(/(吸收魔法伤害|魔法傷害吸收)/, '$1(MDA)')),
  'ModStre9o': propsReplaceFn(allZH, v=>v.replace(/(吸收火焰伤害|火焰傷害吸收)/, '$1(FDA)')),
  'ModStre9p': propsReplaceFn(allZH, v=>v.replace(/(吸收冰霜伤害|冰寒傷害吸收)/, '$1(CDA)')),
  'ModStre9q': propsReplaceFn(allZH, v=>v.replace(/(吸收闪电伤害|電擊傷害吸收)/, '$1(LDA)')),
  'ModStre9r': propsReplaceFn(allZH, v=>v.replace(/(吸收毒素伤害|毒素傷害吸收)/, '$1(PDA)')),
  'Moditem2allattrib': propsReplaceFn(allZH, v=>v.replace(/(所有属性|所有屬性)/, '$1(ATTR)')),
  'Moditem2ExpG': propsReplaceFn(allZH, v=>v.replace(/(经验|經驗值)/, '$1(EXP)')),
  'ModitemHPaK': propsReplaceFn(allZH, v=>v.replace(/(每次消灭恢复的生命|擊殺生命恢復)/, '$1(LK)')),
  'ModitemRedVendP': propsReplaceFn(allZH, v=>v.replace(/(收费减少|價格降低)/, '$1(-Price)')),
  'ModitemAttratvsM': propsReplaceFn(allZH, v=>v.replace(/(命中值|準確率)/, '$1(AR)')),
  'Moditemdamvsm': propsReplaceFn(allZH, v=>v.replace(/(伤害|傷害)/, '$1(DMG)')),
  'Moditemenrescoldsk': propsReplaceFn(allZH, v=>v.replace(/(敌人的冰霜抗性|敵人冰寒抗性)/, '$1(-CR)')),
  'Moditemenresfiresk': propsReplaceFn(allZH, v=>v.replace(/(敌人的火焰抗性|敵人火焰抗性)/, '$1(-FR)')),
  'Moditemenresltngsk': propsReplaceFn(allZH, v=>v.replace(/(敌人的闪电抗性|敵人電擊抗性)/, '$1(-LR)')),
  'Moditemenrespoissk': propsReplaceFn(allZH, v=>v.replace(/(敌人的毒素抗性|敵人毒素抗性)/, '$1(-PR)')),
  'ModitemdamFiresk': propsReplaceFn(allZH, v=>v.replace(/(火焰技能伤害|火焰技能傷害)/, '$1(FD)')),
  'ModitemdamColdsk': propsReplaceFn(allZH, v=>v.replace(/(冰霜技能伤害|冰寒技能傷害)/, '$1(CD)')),
  'ModitemdamLtngsk': propsReplaceFn(allZH, v=>v.replace(/(闪电技能伤害|閃電技能傷害)/, '$1(LD)')),
  'ModitemdamPoissk': propsReplaceFn(allZH, v=>v.replace(/(毒素技能伤害|毒素技能傷害)/, '$1(PD)')),
  'ModStr1w': propsReplaceFn(allZH, v=>v.replace(/(怪物额外掉落金币|怪物金幣掉落量提高)/, '$1(EG)')),
  'ModStr1x': propsReplaceFn(allZH, v=>v.replace(/(额外几率获得魔法物品|尋獲魔法物品機率提高)/, '$1(MF)')),
  'ModStr3u': propsReplaceFn(allZH, v=>v.replace(/(几率命中使怪物逃跑|機率擊中使怪物逃跑)/, '$1(Flee)')),
  'ModStr4c': propsReplaceFn(allZH, v=>v.replace(/(加成命中值|準確率加成)/, '$1(AR)')),
  'ModStr5r': propsReplaceFn(allZH, v=>v.replace(/(使目标减速|使目標減慢)/, '$1(Slow)')),
  'ModStr6d': propsReplaceFn(allZH, v=>v.replace(/(命中可致盲目标|擊中使目標目盲)/, '$1(HBT)')),
  'ModStre8a': propsReplaceFn(allZH, v=>v.replace(/(德鲁伊.*|德魯伊.*)$/, '$1(DRU)')),
  'ModStre8d': propsReplaceFn(allZH, v=>v.replace(/(对恶魔的命中值|對惡魔的準確率)/, '$1(DAR)')),
  'ModStre8e': propsReplaceFn(allZH, v=>v.replace(/(对亡灵的命中值|對不死怪物的準確率)/, '$1(UAR)')),
  'ModStre8f': propsReplaceFn(allZH, v=>v.replace(/(对恶魔的伤害|對惡魔的傷害)/, '$1(DTD)')),
  'ModStre8g': propsReplaceFn(allZH, v=>v.replace(/(命中值|準確率)/, '$1(AR)')),
  'ModStr2uPercent': propsReplaceFn(allZH, v=>v.replace(/(伤害降低|傷害降低)/, '$1(DR)')),
}

const replaceTargets_RWNote = {
  'WeaponDescSpear': propsReplaceFn(allCN, v=>v.replace(/^(.*)/, '【长矛不能做眼光，但可以做无限】\n$1'),
                                    allTW, v=>v.replace(/^(.*)/, '【長矛不能做眼光，但可以做無限】\n$1')),
  'WeaponDescBow': propsReplaceFn(allZH, v=>v.replace(/^(.*)/, '【弓可以做眼光了】\n$1')),
}

function processItemForPropsSort(item) {
  let obj = {};
  for(let i=0; i<itemProps.length; i++) {
    let prop = itemProps[i]
    if (prop == 'zhTWcolor') {
      obj['zhTWcolor'] = item['zhTW']
    }
    else if(prop == 'zhCNcolor') {
      obj['zhCNcolor'] = item['zhCN']
    }
    else {
      obj[prop] = item[prop]
    }
  }
  for(let i=0; i<itemProps.length; i++) {
    delete item[itemProps[i]]
  }  
  ObjectAssign(item, obj)
}

function processItemForAttrAbbreviation(item) {
  const fn = replaceTargets_attrAbbreviation[item.Key]
  if (fn) {
    fn(item, target)
  }
}

function processItemForRWNote(item) {
  const fn = replaceTargets_RWNote[item.Key]
  if (fn) {
    fn(item, target)
  }
}

const itemNamesFilename = 'local\\lng\\strings\\item-modifiers.json';
const itemNames = D2RMM.readJson(itemNamesFilename);
itemNames.forEach(processItemForPropsSort);
itemNames.forEach(processItemForAttrAbbreviation);
if(config['zhCN.itemModifiers.addRWNoteForBaseItem']) {
  itemNames.forEach(processItemForRWNote);
}
D2RMM.writeJson(itemNamesFilename, itemNames);
