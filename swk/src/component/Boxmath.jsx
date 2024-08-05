import 'katex/dist/katex.min.css';
import React from 'react';
import { BlockMath } from 'react-katex';

const MathEquation = ({ equation }) => {
  return (
    <div>
      <BlockMath math={equation} />
    </div>
  );
};

export default MathEquation;