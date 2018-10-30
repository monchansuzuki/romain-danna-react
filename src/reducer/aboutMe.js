
const initState = {
    lang:'JP',
    content :'Romain is a French model/actor/musician and engineer. He is known for his appearance in Japanese TVCM, catalogs and movies. He is also known for being a musician and composer. His portfolio and work ranges from print work, promotional work, magazine publications, ecommerce modeling, music videos, commercials, and more.\n' +
        '\n' +
        'Born in Paris he was graduated as Thermal&Energy engineer in 2012 from the Polytech’Group. He moved in Japan in 2015 and started his modeling/acting career at the age of 26 in Tokyo. He is currently and mainly working in Japan, Korea and France where he also playing piano in concert.\n' +
        '\n' +
        'He has worked with companies such as Shiseido, Revlon, Lacoste, Uniqlo, Microsoft, Godiva, Nivea, Panasonic, Sony, Nintendo, Hitachi, Yamaha, Aeon, Anniversaire wedding, Honda, Suzuki, Oracle, Japanese TV, Japanese Cinema, Safari catalog, Kuraudia wedding, Zexy catalog, NTT docomo, Burger King, Canon, and more. He has started an Instagram account to document and share his work, style, travel, and music.\n' +
        '\n' +
        'When he is not playing the piano, he is either training at the boxing gym, mountain hiking, at the cinema or spending time with his family and friends.'
}

const aboutMeReducer=(state=initState,action)=>{

    if (action.type === 'TOGGLE_LANG'){

        if (state.lang==='JP'){
            return {lang : 'UK',content: 'Romainはフランス人のモデル/俳優/ミュージシャン、エンジニアです。彼は日本のTVCM、カタログ、映画への出演をしていることで知られています。また、音楽家、作曲家としても知られています。彼のポートフォリオと撮影作品は、印刷物、プロモーション作品、雑誌の出版物、eコマースモデリング、ミュージックビデオ、コマーシャルなどです。\n' +
                    '\n' +
                    'パリで生まれ、2012年にPolytech\'GroupからThermal＆Energyエンジニアとして卒業しました。 2015年26歳の時に日本に移住し、東京でモデル・俳優を始めました。彼は現在、主に日本、韓国、フランスで活動をし、コンサートでピアノ演奏もしています。\n' +
                    '\n' +
                    '彼は多くの有名な企業と仕事をしました: 資生堂、Revlon、ラコステ、ユニクロ、Microsoft、ゴディバ、ニベア、パナソニック、Sony、Nintendo、日立、ヤマハ、イオン、アニヴェルセル、ホンダ、スズキ、オラクル、日本のテレビ番組、邦画、サファリカタログ、クラウディア、Zexy、NTTドコモ、Burger King、キヤノンなど。 Instagramのアカウントを開設し、仕事、ライフスタイル、旅行、音楽を記録し共有しています。\n' +
                    '\n' +
                    'ピアノの演奏以外に、ボクシングジムでのトレーニング、山登り、映画鑑賞、家族や友人との時間を過ごしています。'}
        } else if (state.lang==='UK'){
            return({lang : 'JP',content : 'Romain is a French model/actor/musician and engineer. He is known for his appearance in Japanese TVCM, catalogs and movies. He is also known for being a musician and composer. His portfolio and work ranges from print work, promotional work, magazine publications, ecommerce modeling, music videos, commercials, and more.\n' +
                    '\n' +
                    'Born in Paris he was graduated as Thermal&Energy engineer in 2012 from the Polytech’Group. He moved in Japan in 2015 and started his modeling/acting career at the age of 26 in Tokyo. He is currently and mainly working in Japan, Korea and France where he also playing piano in concert.\n' +
                    '\n' +
                    'He has worked with companies such as Shiseido, Revlon, Lacoste, Uniqlo, Microsoft, Godiva, Nivea, Panasonic, Sony, Nintendo, Hitachi, Yamaha, Aeon, Anniversaire wedding, Honda, Suzuki, Oracle, Japanese TV, Japanese Cinema, Safari catalog, Kuraudia wedding, Zexy catalog, NTT docomo, Burger King, Canon, and more. He has started an Instagram account to document and share his work, style, travel, and music.\n' +
                    '\n' +
                    'When he is not playing the piano, he is either training at the boxing gym, mountain hiking, at the cinema or spending time with his family and friends.'})
        }
    }
    else {
        return state
    }
}
export default aboutMeReducer