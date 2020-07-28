import React from 'react'

const Header = ({course}) => (
    <>
    <h1>{course}</h1>
    </>
  )
  
  const Part = ({part, exercise}) => (
    <>
    <p>
      {part} {exercise}
    </p>
    </>
  )
  
  const Content = ({parts}) => (
    <>
        {parts.map((part) => 
          <Part key={part.id}
            part={part.name} 
            exercise={part.exercises}          
          />
        )}
    </>
  )
  
  
  const Total = ({total}) => (
    <>
    <p>
      <b>total of {total.reduce((s, p) => {return s + p.exercises }, 0)} exercises </b>
    </p>
    </>
  ) 

  const Course = ({courses}) => (
    <>
    {courses.map((course) => (
    <>
    <Header course={course.name}/>
    <Content parts={course.parts} />
    <Total total={course.parts}/>
    </>)
    )}
    </>
  )

export default Course