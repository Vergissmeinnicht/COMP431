const random = (min=0, max=800) =>
    Math.random() * (max - min) + min

const wrap = (x, y , canvas) =>{
	if(x > canvas.width){
		x -= canvas.width
	}
	if(x < 0){
		x += canvas.width
	}
	if(y > canvas.height){
		y -= canvas.height
	}
	if(y < 0){
		y += canvas.height
	}
}
// default values
const particle = (
    mass=random(5, 30),
    position=[random(), random()],
    velocity=[random(-0.1, 0.1), random(-0.1, 0.1)],
    acceleration=[0, 0]
) => {
    return {acceleration, velocity, position, mass}
}

const update = ({acceleration, velocity, position, mass}, delta, canvas) => {
	position[0] += velocity[0]*delta
	position[1] += velocity[1]*delta
	wrap(position[0], position[1], canvas)
    return { mass, acceleration, velocity, position }
}

//const accelerate = ()

export default particle

export { update }
