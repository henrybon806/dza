//    _   _   _   _   _   _   _     _   _   _   _
//   / \ / \ / \ / \ / \ / \ / \   / \ / \ / \ / \
//  ( c | r | y | s | t | a | l ) ( b | a | l | l )
//   \_/ \_/ \_/ \_/ \_/ \_/ \_/   \_/ \_/ \_/ \_/
//
//  Two crystal balls is a classic whiteboard problem in
//  which you receive a list of booleans reprenseting at what
//  level the crystal ball will break
//
//  At first it may seem like you can just do linear search, but
//  it's slooooooow - not very effecient. We can do better
//
//  The ideal is to use one ball to find the area in which it
//  will break and then the second to find the exact spot
//
//           O           X
//       +-------+   +-------+
//       |       |   |       |
//     +-+-+---+-+-+-+-+---+-+-+
//     | O | O | O | O | X | X |
//     +---+---+---+-+-+-+-+---+
//                   |   |
//                   +---+
//                     X
//
//  Diagram shows a way to tackle the problem - we want to check
//  chunks until we get the initial break. At that point we jump
//  back and find the exact break point.
//
//  Good luck!

export default function twoCrystalBalls(breaks: boolean[]): number {
  return -1;
}
