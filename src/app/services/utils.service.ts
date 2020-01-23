import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UtilsService {
  constructor() {}

  // Helper function to check if board is 'solvable'
  static isSolvable(board: number[][]): boolean {
    let inv_count = 0;
    for (let i = 0; i < 9 - 1; i++) {
      for (var j = i + 1; j < 9; j++) {
        if (board[j] && board[i] && board[i] > board[j]) {
          inv_count++;
        }
      }
    }

    return inv_count % 2 == 0;
  }

  // Possible neighbours indexes on 3x3 board
  getTileNeighbours(index: number): number[] {
    const neighbours = {
      0: [1, 3],
      1: [0, 2, 4],
      2: [1, 5],
      3: [0, 4, 6],
      4: [1, 3, 5, 7],
      5: [2, 4, 8],
      6: [3, 7],
      7: [4, 6, 8],
      8: [5, 7]
    };

    return neighbours[index];
  }
}
