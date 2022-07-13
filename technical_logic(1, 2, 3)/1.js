const hitungKeuntungan = (money) => {
    
    const rincian = {
        uangBank : 350000000,
        sisaUang(){
            return money-this.uangBank
        },
        keutunganBank(){
            return ((3.5 * this.uangBank) / 100)
        },
        obligasiNegara(){
            let keutunganObligasiNegara =  (30 * this.sisaUang() / 100)
            return keutunganObligasiNegara = (13 * keutunganObligasiNegara / 100)
        },
        sahamA(){
            let keuntunganSahamA = (35 * this.sisaUang() / 100)
            return keuntunganSahamA = (14.5 * keuntunganSahamA / 100)
        },
        sahamB(){
            let keuntunganSahamB = (35 * this.sisaUang() / 100)
            return keuntunganSahamB  = (12.5 * keuntunganSahamB / 100)
        },
        
    }
    let totalKeutungan = (
        rincian.keutunganBank() + 
        rincian.obligasiNegara() + 
        rincian.sahamA() + 
        rincian.sahamB()
        ) * 2
    
    console.log('Total keuntungan ' + totalKeutungan)
    // console.log('keuntungan Bank ' + rincian.keutunganBank())
    // console.log('obligasi ' + rincian.obligasiNegara())
    // console.log('sahamA ' + rincian.sahamA())
    // console.log('sahamB ' + rincian.sahamB())

}

hitungKeuntungan(1000000000)