import React from 'react'
import '../../App.css'

const NavBar = () => {
  return (
    <div>

  <header>
  <nav class="navigation container">
        <div class="nav-brand">Assignments</div>
        <ul class="list-non-bullet nav-pills">
            <li class="list-item-inline">
                <a class="link link-active" href='/'>Home</a>
            </li>
            <li class="list-item-inline">
                <a class="link" href="/TheoryAns">TheoryQns</a>
            </li>
            <li class="list-item-inline">
                <a class="link" href="/FormApp">FormQns</a>
            </li>
            <li class="list-item-inline">
                <a class="link" href="/remainderapp">Hooks</a>
            </li>
            <li class="list-item-inline">
                <a class="link" href="/Redux">Redux</a>
            </li>
            <li class="list-item-inline">
                <a class="link" href="/Redux">Advance React Theory</a>
            </li>
        </ul>
    </nav>
  </header>
  
    </div>
  )
}

export default NavBar;