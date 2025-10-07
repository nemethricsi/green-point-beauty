import { SearchIcon } from "lucide-react";
import { Header } from "@/components/Header";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container mx-auto grow p-4">
        <div className="mx-auto mt-9 w-full max-w-xl">
          <InputGroup>
            <InputGroupInput placeholder="Keresés a kezelések között..." />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
        </div>
      </main>
      <Footer />
    </div>
  );
}
