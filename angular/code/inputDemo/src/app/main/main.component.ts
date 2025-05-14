import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  names = [
    {
      url: 'https://occ-0-2042-3662.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUns1y6TBPPKUXWi7y0UHm6zSJAhcXEsjCJq9TUU7nGSGMzuROqHRqcv1XC_llDPWGA5kGnlooq6_RnbudXcRKLbWtmNeq-QAgxNiL4tw0P-jEFC01DkFBRwNkEoZrzkyo-O9-JYiqChNoaPvsA5fF3eLrTWacR7Lr003632PWPkw2JV5HcRHIrnm7Rj0EY.jpg?r=abf',
      Title: 'When life gives you tangerines',
    },
    {
      url: 'https://occ-0-2042-3662.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABc_QuOdHzJa9WwBiBlfEvpcFRKq9TAIgdJv0KoSilQZ8JMEsdCdQS4VGD6gwVg2CYCYNhTJIald5uVsXbMf-3QaF1k1fnFRbovQr6ddWUtkSOUzil_dtlD1wOIeD_pSI6pAx.jpg?r=c68',
      Title: 'Stranger Things',
    },
    {
      url: 'https://occ-0-2042-3662.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABS60wkIyJE-j7KLsjILo9JH9TWyJ4ZsVC5ZrJySxR_A4w3BQp4Ihccg4VTTzjctfOTTIzjXAty8qfY_gNTVM687gpFUVG9FEgSALaNrWldiGRHNuc2Ki_H0ukVvirydEoITJ.jpg?r=ea2',
      Title: 'Squid Games',
    },
  ];
}
