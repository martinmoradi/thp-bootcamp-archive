/* UCU ou UCC ou UCA ou UCG ou AGU ou AGC => Sérine
CCU ou CCC ou CCA ou CCG => Proline
UUA ou UUG => Leucine
UUU ou UUC => Phénylalanine
CGU ou CGC ou CGA ou CGG ou AGA ou AGG => Arginine
UAU ou UAC => Tyrosine */

function codons_to_acids(str) {
  let codons = str.match(/[\s\S]{1,3}/g); // découpe le string en array de 3 characters
  let mapped = codons.map(codon => {
    if(codon === 'UCU' || codon === 'UCC' || codon === 'UCA' ||codon === 'UCG' ||codon === 'AGU' || codon === 'AGC')
    return "Sérine";
    else if(codon === 'CCU' || codon === 'CCC' || codon === 'CCA' ||codon === 'CCG')
    return "Proline";
    else if(codon === 'UUA' || codon === 'UUG')
    return "Leucine";
    else if(codon === 'UUU' || codon === 'UUC')
    return "Phénylalanine";
    else if(codon === 'CGU' || codon === 'CGC' || codon === 'CGA' ||codon === 'CGG' || codon === 'AGA' ||codon === 'AGG')
    return "Arginine";
    else 
    return "Tyrosine";
  });
  console.log(mapped.join("-"));
}

codons_to_acids('CCGUCGUUGCGCUACAGC');
codons_to_acids('CCUCGCCGGUACUUCUCG');