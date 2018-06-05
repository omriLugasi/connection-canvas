const canvas = document.querySelector('#canvas')
canvas.width = 600
canvas.height = 200


const c = canvas.getContext('2d')

function circle (positionX, positionY, speedX, speedY, size, strokeColor) {
    const absoluteSpeedY = speedY
    const absoluteSpeedX = speedX
    this.draw = () => {
        c.beginPath()
        c.arc(positionX,positionY,size,Math.PI * 2, false)
        c.strokeStyle= strokeColor
        c.stroke()
    }

    this.update = () => {
        if (positionX > canvas.width - size * 2) {
            speedX = -speedX
        } else if(positionX < 0 + size * 2){
            speedX = absoluteSpeedX
        }

        if (positionY > canvas.height - size * 2) {
            speedY = -speedY
        } else if(positionY < 0 + size * 2){
            speedY = absoluteSpeedY
        }
        positionY += speedY
        positionX += speedX
        this.draw()
    }

}

const circleArray = []
const arr = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
const rndColor = () => {
    const color = ['red', 'blue', 'green', 'orange', 'gray', 'black']
    return color[Math.floor(Math.random() * arr.length)]
}
const rnd = () => Math.floor(Math.random() * 7 + 1)
arr.forEach(item => circleArray.push(new circle(80,80,rnd(),rnd(),7, rndColor())))
const animation = () => {
    c.clearRect(0,0,canvas.width,canvas.height)
    circleArray.forEach(circle => circle.update())
    requestAnimationFrame(animation)

}

//start the loop
animation()