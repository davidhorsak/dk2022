let
  sources = import ./nix/sources.nix { };
  nixpkgs = import sources.nixpkgs { };
in
nixpkgs.mkShellNoCC {
	buildInputs = [
		nixpkgs.niv
    nixpkgs.nodejs-16_x
	];
}