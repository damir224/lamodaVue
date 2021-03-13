/**
 * Mocking client-server processing
 */
const _products = [
  {
    id: 1,
    inventory: 10,
    name: 'Executor',
    model: 'Executor-class star dreadnought',
    manufacturer: 'Kuat Drive Yards, Fondor Shipyards',
    cost_in_credits: '1143350000',
    length: '19000',
    max_atmosphering_speed: '100',
    crew: '279144',
    passengers: '38000',
    cargo_capacity: '250000000',
    consumables: '6 years',
    hyperdrive_rating: '2.0',
    starship_class: 'Star Dreadnought',
    imageUrl:
      'https://vignette.wikia.nocookie.net/starwars/images/3/30/Executor_BF2.png/revision/latest?cb=20180903230846',
    pilots: 'no data',
  },
  {
    id: 2,
    inventory: 10,
    name: 'Sentinel-class landing craft',
    model: 'Sentinel-class landing craft',
    manufacturer: 'Sienar Fleet Systems, Cyngus Spaceworks ',
    cost_in_credits: '240000',
    length: '38',
    max_atmosphering_speed: '1000',
    crew: '5',
    passengers: '75',
    cargo_capacity: '180000',
    consumables: '1 month',
    hyperdrive_rating: '1.0',
    starship_class: 'Landing Craft',
    imageUrl:
      'https://lumiere-a.akamaihd.net/v1/images/veh_ia_1752_040381b2.jpeg?region=100%2C0%2C983%2C981&width=960',
    pilots: 'no data',
  },
  {
    id: 3,
    inventory: 10,
    name: 'Death Star',
    model: 'DS-1 Orbital Battle Station',
    manufacturer:
      'Imperial Department of Military Research, Sienar Fleet Systems',
    cost_in_credits: '1000000000000',
    length: '120000',
    max_atmosphering_speed: '<100',
    crew: '342953',
    passengers: '843342',
    cargo_capacity: '1000000000000',
    consumables: '3 years',
    hyperdrive_rating: '4.0',
    starship_class: 'Deep Space Mobile Battlestation',
    imageUrl:
      'https://lumiere-a.akamaihd.net/v1/images/Death-Star-I-copy_36ad2500.jpeg?region=0%2C0%2C1600%2C900&width=960',
    pilots: 'no data',
  },
  {
    id: 4,
    inventory: 10,
    name: 'Y-wing',
    model: 'BTL Y-wing',
    manufacturer: 'Koensayr Manufacturing',
    cost_in_credits: '134999',
    length: '14',
    max_atmosphering_speed: '1000',
    crew: '2',
    passengers: '0',
    cargo_capacity: '110',
    consumables: '1 week',
    hyperdrive_rating: '1.0',
    starship_class: 'Assault Starfighter',
    imageUrl:
      'https://lumiere-a.akamaihd.net/v1/images/Y-Wing-Fighter_0e78c9ae.jpeg?region=0%2C0%2C1536%2C864&width=960',
    pilots: 'no data',
  },
];

export default {
  getProducts(cb) {
    setTimeout(() => cb(_products), 100);
  },

  buyProducts(products, cb) {
    cb();
  },
};
