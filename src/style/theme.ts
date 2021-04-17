export enum ThemeType {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

export function hexToRgba ( input:string , opacity:number ){ 
  
  const hex = input.trim().replace( "#", "" );   
  const rgb = hex.match( /[a-f\d]{2}/gi );
  rgb?.forEach(function (str:string, x:number, arr:any){           
      if ( str.length === 1 ) str = str + str;       
      arr[ x ] = parseInt( str, 16 ); 
  }); 
  return "rgba(" + rgb?.join(", ") + ", " + opacity + ")"; 
} 

const colors = {
  white: '#ffffff',
  green: '#008000',
  forestgreen: '#228B22',
  darkgreen: '#006400',
  seagreen: '#2e8b57',
  mediumseagreen: '#3CB371',
  lightgreen: '#90EE90',
  darkseagreen:	'#8FBC8F',
  pastelgreen: 'rgba(121, 206, 159, 0.6)',

  bisque: '#FFE4C4',

}

const theme = {
  colors,
  hexToRgba,
}

export default theme;