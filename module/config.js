import { RACES } from './constants/races.js'
import { ATTACK_TYPES } from './constants/attackTypes.js'
import { WEAPON_CONDITIONS } from './constants/weaponConditions.js'

// Globally available variables for the system, available in all templates with "falloutpnp."
export const falloutpnp = {
  weaponTypes: {
    rifle: 'Rifle',
    pistol: 'Pistol',
    melee: 'Melee Weapon',
  },
  weapons: {
    laserRifle: {
      name: 'Laser Rifle',
      type: 'rifle',
      damage: '4d6',
      range: 30,
      ammoType: 'Energy Cell',
      weight: 12,
      description: 'A high-powered energy rifle that fires laser beams.',
    },
    Pistol10mm: {
      name: '10mm Pistol',
      type: 'pistol',
      damage: '2d6',
      range: 15,
      ammoType: '10mm Rounds',
      weight: 5,
      description: 'A standard sidearm used in the wasteland.',
    },
  },
};