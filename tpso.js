let distributionSystem;
let contingencyScenarios;
let customerDamageFunctions;
let loadData;
let sectionalizerCost;
let breakerCost;
const scenarios = [
  //scenario 1
  {
    distributionSystem: [
      { id: 1, type: null },
      { id: 2, type: null },
      { id: 3, type: null },
      { id: 4, type: null },
      { id: 5, type: null },
      { id: 6, type: null },
      { id: 7, type: null },
      { id: 8, type: null },
      { id: 9, type: null },
      { id: 10, type: null }
    ],
    contingencyScenarios: [
      { faultedSection: 3, repairTime: 8 },
      { faultedSection: 6, repairTime: 12 }
    ],
    customerDamageFunctions: {
      residential: (outageTime) => 10 * outageTime,
      commercial: (outageTime) => 20 * outageTime,
      industrial: (outageTime) => 30 * outageTime
    },
    loadData: [
      { loadValue: 100, customerType: 'residential' },
      { loadValue: 200, customerType: 'commercial' },
      { loadValue: 150, customerType: 'industrial' },
      { loadValue: 120, customerType: 'residential' },
      { loadValue: 180, customerType: 'commercial' },
      { loadValue: 250, customerType: 'industrial' },
      { loadValue: 90, customerType: 'residential' },
      { loadValue: 170, customerType: 'commercial' },
      { loadValue: 220, customerType: 'industrial' },
      { loadValue: 130, customerType: 'residential' }
    ],
    sectionalizerCost: 4700,
    breakerCost: 11800,
  },
  //scenario 2
  {
    distributionSystem: [
      { id: 1, type: null },
      { id: 2, type: null },
      { id: 3, type: null },
      { id: 4, type: null },
      { id: 5, type: null },
      { id: 6, type: null },
      { id: 7, type: null },
      { id: 8, type: null },
      { id: 9, type: null },
      { id: 10, type: null },
      { id: 11, type: null },
      { id: 12, type: null }
    ],
    contingencyScenarios: [
      { faultedSection: 4, repairTime: 14 },
      { faultedSection: 8, repairTime: 10 },
      { faultedSection: 11, repairTime: 12 }
    ],
    customerDamageFunctions: {
      residential: (outageTime) => 12 * outageTime,
      commercial: (outageTime) => 18 * outageTime,
      industrial: (outageTime) => 25 * outageTime
    },
    loadData: [
      { loadValue: 120, customerType: 'residential' },
      { loadValue: 180, customerType: 'commercial' },
      { loadValue: 200, customerType: 'industrial' },
      { loadValue: 150, customerType: 'residential' },
      { loadValue: 220, customerType: 'commercial' },
      { loadValue: 180, customerType: 'industrial' },
      { loadValue: 100, customerType: 'residential' },
      { loadValue: 160, customerType: 'commercial' },
      { loadValue: 240, customerType: 'industrial' },
      { loadValue: 130, customerType: 'residential' },
      { loadValue: 190, customerType: 'commercial' },
      { loadValue: 210, customerType: 'industrial' }
    ],
    sectionalizerCost: 4500,
    breakerCost: 11500,
  },
  //scenario 3
  {
    distributionSystem: [
      { id: 1, type: null },
      { id: 2, type: null },
      { id: 3, type: null },
      { id: 4, type: null },
      { id: 5, type: null },
      { id: 6, type: null },
      { id: 7, type: null },
      { id: 8, type: null }
    ],

    contingencyScenarios: [
      { faultedSection: 2, repairTime: 6 },
      { faultedSection: 5, repairTime: 10 },
      { faultedSection: 7, repairTime: 8 }
    ],

    customerDamageFunctions: {
      residential: (outageTime) => 15 * outageTime,
      commercial: (outageTime) => 25 * outageTime
    },

    loadData: [
      { loadValue: 80, customerType: 'residential' },
      { loadValue: 120, customerType: 'commercial' },
      { loadValue: 150, customerType: 'residential' },
      { loadValue: 200, customerType: 'commercial' },
      { loadValue: 100, customerType: 'residential' },
      { loadValue: 180, customerType: 'commercial' },
      { loadValue: 90, customerType: 'residential' },
      { loadValue: 160, customerType: 'commercial' }
    ],

    sectionalizerCost: 5000,
    breakerCost: 12000,
  },
  //scenario 4
  {
    distributionSystem: [
      { id: 1, type: null },
      { id: 2, type: null },
      { id: 3, type: null },
      { id: 4, type: null },
      { id: 5, type: null },
      { id: 6, type: null },
      { id: 7, type: null },
      { id: 8, type: null },
      { id: 9, type: null },
      { id: 10, type: null },
      { id: 11, type: null },
      { id: 12, type: null },
      { id: 13, type: null },
      { id: 14, type: null },
      { id: 15, type: null }
    ],

    contingencyScenarios: [
      { faultedSection: 5, repairTime: 18 },
      { faultedSection: 9, repairTime: 12 },
      { faultedSection: 13, repairTime: 16 }
    ],

    customerDamageFunctions: {
      residential: (outageTime) => 8 * outageTime,
      commercial: (outageTime) => 15 * outageTime,
      industrial: (outageTime) => 22 * outageTime
    },

    loadData: [
      { loadValue: 80, customerType: 'residential' },
      { loadValue: 120, customerType: 'commercial' },
      { loadValue: 160, customerType: 'industrial' },
      { loadValue: 100, customerType: 'residential' },
      { loadValue: 180, customerType: 'commercial' },
      { loadValue: 200, customerType: 'industrial' },
      { loadValue: 90, customerType: 'residential' },
      { loadValue: 150, customerType: 'commercial' },
      { loadValue: 180, customerType: 'industrial' },
      { loadValue: 120, customerType: 'residential' },
      { loadValue: 170, customerType: 'commercial' },
      { loadValue: 220, customerType: 'industrial' },
      { loadValue: 110, customerType: 'residential' },
      { loadValue: 190, customerType: 'commercial' },
      { loadValue: 240, customerType: 'industrial' }
    ],

    sectionalizerCost: 4800,
    breakerCost: 12500,
  }
]

function setUpSystem(index) {
  const system = scenarios[index];
  distributionSystem = system.distributionSystem;
  contingencyScenarios = system.contingencyScenarios;
  customerDamageFunctions = system.customerDamageFunctions;
  loadData = system.loadData;
  sectionalizerCost = system.sectionalizerCost;
  breakerCost = system.breakerCost;
}















// Helper functions
// Helper functions for TPSO
function generateRandomVector(dimensions) {
  return Array.from({ length: dimensions }, () => Math.random() * 2 * Math.PI);
}

function calculateDistance(vector1, vector2) {
  return vector1.map((angle1, i) => {
    const angle2 = vector2[i];
    const distance = Math.min(Math.abs(angle1 - angle2), 2 * Math.PI - Math.abs(angle1 - angle2));
    return distance;
  });
}

function transformationFunction(distance, constant) {
  return 1 / (1 + Math.exp(-constant * (distance - 1 / 3)));
}

function updateVelocity(velocity, personalBest, globalBest, r1, r2, c1, c2) {
  return velocity.map((v, i) => {
    const w = 0.5 + Math.random() / 2; // Inertia weight
    const personalTerm = c1 * r1 * Math.sin(personalBest[i] - v);
    const socialTerm = c2 * r2 * Math.sin(globalBest[i] - v);
    return w * v + personalTerm + socialTerm;
  });
}

function updatePosition(position, velocity) {
  return position.map((angle, i) => (angle + velocity[i]) % (2 * Math.PI));
}

function findDeEnergizedLoadPoints(startIndex, system) {
  const deEnergizedLoadPoints = [];
  for (let i = startIndex; i < system.length; i++) {
    deEnergizedLoadPoints.push(loadData[i]);
  }
  return deEnergizedLoadPoints;
}

function decodePosition(position) {
  return position.map((angle) => {
    if (angle < Math.PI / 3) return 0; // No switch
    if (angle < (2 * Math.PI) / 3) return 1; // Sectionalizer
    return 2; // Breaker
  });
}

function calculateECOSTForLoadPoint(loadPoint, outageTime) {
  const { loadValue, customerType } = loadPoint;
  const customerDamageFunction = customerDamageFunctions[customerType];
  return customerDamageFunction(outageTime) * loadValue;
}

function findBreakers(system) {
  return system.reduce((breakers, node, index) => {
    if (node.type === 'breaker') breakers.push(index);
    return breakers;
  }, []);
}

function findSectionalizers(system) {
  return system.reduce((sectionalizers, node, index) => {
    if (node.type === 'sectionalizer') sectionalizers.push(index);
    return sectionalizers;
  }, []);
}

function calculateECOSTForContingency(contingency, system) {
  const { faultedSection, repairTime } = contingency;
  let totalECOST = 0;

  const breakers = findBreakers(system);
  const sectionalizers = findSectionalizers(system);

  // Find the first breaker upstream of the faulted section
  const firstBreaker = breakers.find((breaker) => breaker < faultedSection);

  // If no breaker is found, assume the entire system is de-energized
  if (!firstBreaker) {
    for (const loadPoint of loadData) {
      totalECOST += calculateECOSTForLoadPoint(loadPoint, repairTime);
    }
    return totalECOST;
  }

  // Find the first sectionalizer upstream of the faulted section (if any)
  const firstSectionalizer = sectionalizers.find(
    (sectionalizer) => sectionalizer < faultedSection && sectionalizer > firstBreaker
  );

  // Calculate the ECOST for the de-energized load points
  if (!firstSectionalizer) {
    const deEnergizedLoadPoints = findDeEnergizedLoadPoints(firstBreaker + 1, system);
    for (const loadPoint of deEnergizedLoadPoints) {
      totalECOST += calculateECOSTForLoadPoint(loadPoint, repairTime);
    }
  } else {
    // Calculate ECOST for the sectionalizer switching time
    const deEnergizedLoadPoints = findDeEnergizedLoadPoints(firstBreaker + 1, system);
    const sectionalizerSwitchingTime = 5;
    for (const loadPoint of deEnergizedLoadPoints) {
      totalECOST += calculateECOSTForLoadPoint(loadPoint, sectionalizerSwitchingTime);
    }

    // Calculate ECOST for the loop switch switching time
    const newDeEnergizedLoadPoints = findDeEnergizedLoadPoints(firstSectionalizer + 1, system);
    const loopSwitchSwitchingTime = 5;
    for (const loadPoint of newDeEnergizedLoadPoints) {
      totalECOST += calculateECOSTForLoadPoint(loadPoint, loopSwitchSwitchingTime);
    }

    // Calculate ECOST for the remaining repair time
    const remainingFaultyZone = findDeEnergizedLoadPoints(faultedSection, system);
    for (const loadPoint of remainingFaultyZone) {
      totalECOST += calculateECOSTForLoadPoint(loadPoint, repairTime);
    }
  }

  return totalECOST;
}


function calculateFitness(position, distributionSystem) {
  const decodedPosition = decodePosition(position);
  const system = distributionSystem.map((element, i) => ({
    ...element,
    type: decodedPosition[i] === 0 ? null : decodedPosition[i] === 1 ? 'sectionalizer' : 'breaker',
  }));

  let totalECOST = 0;
  for (const contingency of contingencyScenarios) {
    totalECOST += calculateECOSTForContingency(contingency, system);
  }

  const investmentCost =
    decodedPosition.filter((type) => type === 1).length * sectionalizerCost +
    decodedPosition.filter((type) => type === 2).length * breakerCost;

  return totalECOST + investmentCost;
}


function mapAnglesToStates(angles) {
  return angles.map(angle => {
    if (angle < Math.PI / 3) {
      return 0; // Represents no switch
    } else if (angle < (2 * Math.PI) / 3) {
      return 1; // Represents a sectionalizer
    } else {
      return 2; // Represents a breaker
    }
  });
}




function tpso(system) {
  // TPSO parameters
  const swarmSize = 50;
  const dimensions = system.distributionSystem.length; // Number of possible switch locations
  const c1 = 2; // Cognitive coefficient
  const c2 = 2; // Social coefficient
  const maxIterations = 100;
  const convergenceThreshold = 1e-6; // Convergence threshold

  const swarm = Array.from({ length: swarmSize }, () => ({
    position: generateRandomVector(dimensions),
    velocity: generateRandomVector(dimensions),
    personalBest: generateRandomVector(dimensions),
    fitness: Infinity,
  }));

  let globalBest = generateRandomVector(dimensions);
  let globalFitness = Infinity;

  for (let iteration = 0; iteration < maxIterations; iteration++) {
    let bestFitness = Infinity;

    console.log("Fitness calculated before reaching optimal solution")
    for (let i = 0; i < swarmSize; i++) {
      const particle = swarm[i];
      const fitness = calculateFitness(particle.position, system.distributionSystem);
      console.log(i + " " + fitness);

      if (fitness < particle.fitness) {
        // console.log("satisfied 1");
        particle.personalBest = [...particle.position];
        particle.fitness = fitness;
      }

      if (fitness < globalFitness) {
        // console.log("satisfied 2");
        globalBest = [...particle.position];
        globalFitness = fitness;
      }

      if (fitness < bestFitness) {
        bestFitness = fitness;
      }

      const r1 = Math.random();
      const r2 = Math.random();

      const distances = calculateDistance(particle.position, [Math.PI / 6, Math.PI / 2, (5 * Math.PI) / 6]);
      const transformations = distances.map(distance => transformationFunction(distance, 1));

      const newVelocity = updateVelocity(particle.velocity, particle.personalBest, globalBest, r1, r2, c1, c2);
      let newPosition = updatePosition(particle.position, newVelocity);

      // Update the particle's position based on transformations
      newPosition = newPosition.map((angle, index) => {
        const random = Math.random();
        if (transformations[index] > 0.5 && transformations[index] > random) {
          return angle;
        } else if (transformations[index] < 0.5 && (1 - transformations[index]) > random) {
          return angle;
        } else {
          return generateRandomVector(dimensions)[index];
        }
      });

      // Update the particle's velocity and position
      particle.velocity = newVelocity;
      particle.position = newPosition;

    }

  }

  // After all iterations, return the global best solution
  return { globalFitness: globalFitness, globalBest: mapAnglesToStates(globalBest) }
}

for (let i = 0; i < 1; i++) {
  setUpSystem(i);
  const system = scenarios[i];
  console.log(`Scenario ${i + 1}`);
  const solution = tpso(system);
  console.log("Final best global fitness "+solution.globalFitness);
  console.log("Final switch placement "+solution.globalBest);
}