// Helper for testing imports and exports.

const cat = {}

cat.name = 'pinky'

const cats = {
  'pinky': {
    'age': 3,
    'breed': 'european-shorthair',
  },
}

export {
  cat,
  cats,
}
