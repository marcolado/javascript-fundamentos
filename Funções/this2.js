function pessoa( ){
    const self = this //método mais fácil 
    this.idade = 0 
   setInterval(function() {
    self.idade++
      console.log(self.idade)
   }/*.bind(this)*/, 2000)
   
}
new pessoa 