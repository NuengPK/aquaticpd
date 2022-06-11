export class AquaticFoodService{

  private aquaticFood = [
    {name: "ปลาอินทรี", description: "กินที อร่อยทั้งเรือน", imagePath: "http://4.bp.blogspot.com/-oBRtL82nIJc/UhxGa2sB1LI/AAAAAAAAAF0/k1CEbItGXEU/s1600/%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B9%8C+11.jpg"},
    {name: "หมึก", description: "กินที อร่อยทั้งเรือน", imagePath: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Arrow_squid.jpg/300px-Arrow_squid.jpg"}
  ]
  getAquaticFood(){
    return this.aquaticFood
  }
}

//ng generate service <service name>
