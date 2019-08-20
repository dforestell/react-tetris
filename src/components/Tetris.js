import React from 'react';

import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

import { createStage } from '../gameHelpers';

import { StyledTetris, StyledTetrisWrapper } from './styles/StyledTetris';

const Tetris = () => {
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        < Stage stage={createStage()} />

        <div>
          <aside>
            < Display text="Score"/>
            < Display text="Rows"/>
            < Display text="Level"/>
          </aside>
        </div>
        < StartButton />
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
