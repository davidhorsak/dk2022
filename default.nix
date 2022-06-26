let
  sources = import ./nix/sources.nix { };
  nixpkgs = import sources.nixpkgs { };
in
nixpkgs.mkShell {
	buildInputs = [
		nixpkgs.niv
    nixpkgs.nodejs-16_x
	];
}