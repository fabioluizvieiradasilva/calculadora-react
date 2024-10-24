
import { Container, Content, Row, Column } from "./styles";

import Input from './components/Input';
import Button from './components/Button';
import { useState } from "react";

const App = () =>{
  const [currentNumber, setCurrentNumber] = useState(0);
  const [firstNumber, setFirstNumber] = useState(0);
  const [operation, setOperation] = useState('');  

  let signal = '';

  const handlerOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }

  const handlerAddNumber = (num) => {
    console.log(currentNumber)
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`);
  }

  const handlerSumNumbers = () => {
    console.log(currentNumber)
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      console.log('firstNumber ' + firstNumber);
      console.log('currentNumber ' + currentNumber);
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handlerMinusNumbers = () => {
    console.log(currentNumber)
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(minus));
      setOperation('');
    }
  }

  const handlerMultiplicationNumbers = () => {
    console.log(currentNumber)
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('x');
    } else {
      const multi = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multi));
      setOperation('');
    }
  }

  const handlerDivisionNumbers = () => {
    console.log(currentNumber)
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const division = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(division));
      setOperation('');
    }
  }  

  const handlerSquareRootNumbers = () => {

    console.log('firstNumber ' + firstNumber);
    console.log('currentNumber ' + currentNumber);
    const squareRoot = Math.sqrt(Number(currentNumber));
    setCurrentNumber(String(squareRoot));
    setOperation('');

  }

  const handlerDot = () => {
    setCurrentNumber(String(currentNumber) + '.');    
  }

  const signalPlusMinus = () => {    
    signal === '' && currentNumber > 0
    ? setCurrentNumber('-' + String(currentNumber))
    : setCurrentNumber(String(currentNumber).replace('-',''));       
  }

  const handlerEquals = () => {
    console.log(firstNumber)
    console.log(operation)
    console.log(currentNumber)
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handlerSumNumbers();
          break;
        case '-':
          handlerMinusNumbers();
          break;
        case 'x':
          handlerMultiplicationNumbers();
          break;
        case '/':
          handlerDivisionNumbers();
          break;
        case 'Raiz':
          handlerSquareRootNumbers();
          break;          
      
        default:
          break;
      }
    }
  }


  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="CE"/>
          <Button label="C" onClick={() => handlerOnClear()}/>
          <Button label="Raiz" onClick={handlerSquareRootNumbers}/>
          <Button label="/" onClick={handlerDivisionNumbers}/>
        </Row>        
        <Row>
          <Button label="7" onClick={() => handlerAddNumber('7')}/>
          <Button label="8" onClick={() => handlerAddNumber('8')}/>
          <Button label="9" onClick={() => handlerAddNumber('9')}/>
          <Button label="x" onClick={handlerMultiplicationNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handlerAddNumber('4')}/>
          <Button label="5" onClick={() => handlerAddNumber('5')}/>
          <Button label="6" onClick={() => handlerAddNumber('6')}/>
          <Button label="-" onClick={handlerMinusNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handlerAddNumber('1')}/>
          <Button label="2" onClick={() => handlerAddNumber('2')}/>
          <Button label="3" onClick={() => handlerAddNumber('3')}/>
          <Button label="+" onClick={handlerSumNumbers}/>
        </Row>
        <Row>
          <Button label="+/-" onClick={signalPlusMinus}/>
          <Button label="0" onClick={() => handlerAddNumber('0')}/>
          <Button label="," onClick={handlerDot}/>
          <Button label="=" onClick={handlerEquals}/>
        </Row>        
        
      </Content>      
    </Container>
  );
}

export default App;
