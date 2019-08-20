import React from 'react';

import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

import { createStage } from '../gameHelpers'

const Tetris = () => {
  return (
    <div>
      < Stage stage={createStage()} />

      <div>
        <aside>
          < Display text="Score"/>
          < Display text="Rows"/>
          < Display text="Level"/>
        </aside>
      </div>
      < StartButton />
    </div>
  );
};

export default Tetris;
