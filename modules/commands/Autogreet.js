module.exports.config = {
    name: 'autotb',
    version: '10.02',
    hasPermission: 0,
    credits: 'Justine Clyde',
    description: 'Automatically send messages at scheduled times!',
    commandCategory: 'admin',
    usages: '[]',
    cooldowns: 3
};

const nam = [{
    timer: '03:35:00 AM',
    message: ['Hello mga tanga matutulog muna ako ng tatlong oras HAHAHA babush ]
},
{
    timer: '03:00:00 AM',
    message: ['Umaga na pala tangina HAHAHA wala pa akong tulog (bot ako eh)'] 
},
{
    timer: '02:00:00 AM',
    message: ['May tulog ba kayo?', 'Masarap matulog pero mas masarap kung katabi ko sya:<']
},
{
    timer: '01:00:00 AM',
    message: ['Uso matulog mga beh', 'Diko na kailangan matulog basta nakakausap ko sya']
},
{
    timer: '12:00:00 AM',
    message: ['Alas dose na oh tulog na kayo mga tanga', 'alas dose na pala, akala ko ako pa']
},
{
    timer: '11:11:00 PM',
    message: ['11:11 na mga perd wala ba kayong babatiin jan?,' 'uwi na kayo sa mga lungga nyo 11:11 na!']
},
{
    timer: '10:00:00 PM',
    message: ['Goodnight, mga hampaslupa', 'pasado 10 na tulog na mga walang kausap jan']
},
{
    timer: '07:00:00 PM',
    message: ['Sana di masarap ulam nyo!🤮', 'Ulam namin is karneng pusa']
},
{
    timer: '01:00:00 PM',
    message: ['Hapon na mga ulol', 'Lakas ng putok mo teh maligo kana']
},
{
    timer: '06:00:00 AM',
    message: ['Gising naba kayo mga bobo?', 'Gising mga hampaslupa']
},
{
    timer: '12:00:00 PM',
    message: ['Tapos naba kayo kumain?', 'Kain na kayo guys alas dose na']
},
{
    timer: '11:00:00 AM',
    message: ['Tara guys kain sardinas kaso ulam', 'Lf eatwell para makakain na ako']
},
{
    timer: '10:00:00 AM',
    message: ['Ako lang ata active dito eh, kick ko kayo jan']
},
{
    timer: '05:00:00 PM',
    message: ['Tapos na kayo mag meryenda?']
}];

module.exports.onLoad = o => setInterval(() => {
    const r = a => a[Math.floor(Math.random() * a.length)];
    if (á = nam.find(i => i.timer == new Date(Date.now() + 25200000).toLocaleString().split(/,/).pop().trim())) global.data.allThreadID.forEach(i => o.api.sendMessage(r(á.message), i));
}, 1000);

module.exports.run = o => {};
