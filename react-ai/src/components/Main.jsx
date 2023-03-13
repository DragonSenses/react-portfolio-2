import React from 'react'
import AboutMe from './AboutMe'
import Experience from './Experience'
import Skills from './Skills'
import { useState } from 'react'
import Modal from './Modal'
import Background from './Background'

export default function Main() {
  const [showModal, setShowModal] = useState(false);

  function onCloseHandler () {
    setShowModal(false);
  }

  function openModal(){
    setShowModal(true);
  }

  return (
    <div className='p-4 flex flex-col flex-1 md:grid md:grid-cols-4 gap-4
    relative overflow-hidden'>
      { showModal && <Modal onClose={onCloseHandler} /> }
      <div className="md:col-span-3 z-10 flex flex-col gap-4">
        <AboutMe openModal={openModal} />
        <Experience />
      </div>
      
      <Background />
      <Skills />
    </div>
  )
}
