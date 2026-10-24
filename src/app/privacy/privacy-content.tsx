"use client";

import { useEffect } from "react";
import { Scale } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import PageHero from "@/components/site/PageHero";
import { Card } from "@/components/ui/card";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-lg font-bold text-brand-navy mb-2">{title}</h2>
      <div className="text-sm leading-relaxed text-body">{children}</div>
    </div>
  );
}

export default function PrivacyContent() {
  const { lang } = useLanguage();
  const fr = lang === "fr";

  useEffect(() => {
    document.title = fr
      ? "Politique de confidentialité | ShipDirect"
      : "Privacy Policy | ShipDirect";
  }, [fr]);

  return (
    <main>
      <PageHero
        align="center"
        eyebrow={fr ? "Mentions légales" : "Legal"}
        eyebrowIcon={Scale}
        title={fr ? "Politique de confidentialité" : "Privacy Policy"}
        subtitle={fr ? "Dernière mise à jour : Janvier 2025" : "Last Updated: January 2025"}
      />
      <section className="bg-off-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Card className="gap-0 rounded-3xl p-6 shadow-[var(--shadow-card)] sm:p-10">
            <div className="prose prose-sm max-w-none space-y-8 text-body">
          {fr ? (
            <>
              <Section title="1. Introduction">
                ShipDirect (« nous », « notre » ou « nos ») s&apos;engage à protéger la vie privée de nos clients, visiteurs et partenaires commerciaux. La présente Politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous utilisez notre site web et nos services.
              </Section>
              <Section title="2. Informations que nous collectons">
                Nous pouvons collecter les catégories d&apos;informations suivantes :
                <ul className="mt-3 space-y-2 list-disc pl-5">
                  <li>Coordonnées (nom, numéro de téléphone, adresse email)</li>
                  <li>Détails d&apos;expédition (adresses de ramassage/livraison, descriptions des marchandises)</li>
                  <li>Informations de paiement (traitées par des processeurs tiers sécurisés)</li>
                  <li>Informations commerciales pour les clients B2B (nom de l&apos;entreprise, coordonnées commerciales)</li>
                  <li>Données d&apos;utilisation du site web (pages visitées, temps passé sur le site, type de navigateur)</li>
                </ul>
              </Section>
              <Section title="3. Comment nous utilisons vos informations">
                Nous utilisons les informations que nous collectons pour :
                <ul className="mt-3 space-y-2 list-disc pl-5">
                  <li>Traiter et exécuter les commandes d&apos;expédition</li>
                  <li>Communiquer avec vous concernant vos envois et vos devis</li>
                  <li>Préparer la documentation d&apos;exportation et douanière</li>
                  <li>Fournir et améliorer nos services</li>
                  <li>Respecter les obligations légales et réglementaires</li>
                  <li>Envoyer des communications opérationnelles liées à vos commandes</li>
                </ul>
              </Section>
              <Section title="4. Partage d'informations">
                Nous ne vendons pas vos informations personnelles. Nous pouvons partager vos informations avec :
                <ul className="mt-3 space-y-2 list-disc pl-5">
                  <li>Les partenaires logistiques et d&apos;expédition nécessaires à l&apos;exécution de votre envoi</li>
                  <li>Les autorités légales ou réglementaires lorsque la loi l&apos;exige</li>
                  <li>Les sous-traitants liés par des obligations de confidentialité</li>
                </ul>
              </Section>
              <Section title="5. Conservation des données">
                Nous conservons les informations personnelles aussi longtemps que nécessaire pour remplir les objectifs décrits dans cette politique. Les dossiers d&apos;expédition sont généralement conservés pendant un minimum de sept (7) ans, conformément aux réglementations canadiennes en matière de douanes et de commerce.
              </Section>
              <Section title="6. Vos droits">
                En vertu de la Loi sur la protection des renseignements personnels et les documents électroniques (LPRPDE), vous avez le droit de :
                <ul className="mt-3 space-y-2 list-disc pl-5">
                  <li>Accéder aux informations personnelles que nous détenons à votre sujet</li>
                  <li>Demander la correction d&apos;informations inexactes</li>
                  <li>Retirer votre consentement à certaines utilisations de vos informations</li>
                  <li>Demander la suppression de vos informations le cas échéant</li>
                </ul>
                Pour exercer ces droits, contactez-nous à{" "}
                <a href="mailto:info@shipdirect.ca" className="text-brand-red underline">info@shipdirect.ca</a>.
              </Section>
              <Section title="7. Cookies">
                Notre site web peut utiliser des cookies pour améliorer l&apos;expérience utilisateur et recueillir des données analytiques. Vous pouvez désactiver les cookies via les paramètres de votre navigateur ; cependant, certaines fonctionnalités du site web peuvent ne pas fonctionner correctement.
              </Section>
              <Section title="8. Sécurité">
                Nous mettons en œuvre des mesures de protection administratives, techniques et physiques raisonnables pour protéger vos informations personnelles. Aucune méthode de transmission sur internet n&apos;est sécurisée à 100 %.
              </Section>
              <Section title="9. Liens vers des tiers">
                Notre site web peut contenir des liens vers des sites web tiers. Nous ne sommes pas responsables de leurs pratiques de confidentialité.
              </Section>
              <Section title="10. Mises à jour de cette politique">
                Nous pouvons mettre à jour cette Politique de confidentialité de temps à autre. Tout changement sera publié sur cette page avec une date d&apos;entrée en vigueur mise à jour.
              </Section>
              <Section title="11. Nous contacter">
                Si vous avez des questions sur cette Politique de confidentialité :
                <div className="mt-3 bg-navy-tint rounded-xl p-5 not-prose">
                  <p className="font-semibold text-brand-navy">ShipDirect</p>
                  <p>Point de dépôt Ottawa (Fourni à la confirmation)</p>
                  <p><a href="mailto:info@shipdirect.ca" className="text-brand-red hover:underline">info@shipdirect.ca</a></p>
                  <p><a href="tel:6137002747" className="text-brand-red hover:underline">613-700-2747</a></p>
                </div>
              </Section>
            </>
          ) : (
            <>
              <Section title="1. Introduction">
                ShipDirect (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting the privacy of our customers, visitors, and business partners. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
              </Section>
              <Section title="2. Information We Collect">
                We may collect the following categories of information:
                <ul className="mt-3 space-y-2 list-disc pl-5">
                  <li>Contact information (name, phone number, email address)</li>
                  <li>Shipping details (pickup/delivery addresses, goods descriptions)</li>
                  <li>Payment information (processed through secure third-party processors)</li>
                  <li>Business information for B2B clients (company name, trade details)</li>
                  <li>Website usage data (pages visited, time on site, browser type)</li>
                </ul>
              </Section>
              <Section title="3. How We Use Your Information">
                We use the information we collect to:
                <ul className="mt-3 space-y-2 list-disc pl-5">
                  <li>Process and fulfill shipping orders</li>
                  <li>Communicate with you about your shipments and quotes</li>
                  <li>Prepare export and customs documentation</li>
                  <li>Provide and improve our services</li>
                  <li>Comply with legal and regulatory obligations</li>
                  <li>Send operational communications related to your orders</li>
                </ul>
              </Section>
              <Section title="4. Sharing of Information">
                We do not sell your personal information. We may share your information with:
                <ul className="mt-3 space-y-2 list-disc pl-5">
                  <li>Logistics and shipping partners required to fulfill your shipment</li>
                  <li>Legal or regulatory authorities where required by law</li>
                  <li>Subcontractors bound by confidentiality obligations</li>
                </ul>
              </Section>
              <Section title="5. Data Retention">
                We retain personal information for as long as necessary to fulfill the purposes outlined in this policy. Shipping records are typically retained for a minimum of seven (7) years as required by Canadian customs and commercial regulations.
              </Section>
              <Section title="6. Your Rights">
                Under the Personal Information Protection and Electronic Documents Act (PIPEDA), you have the right to:
                <ul className="mt-3 space-y-2 list-disc pl-5">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Withdraw consent for certain uses of your information</li>
                  <li>Request deletion of your information where applicable</li>
                </ul>
                To exercise these rights, contact us at{" "}
                <a href="mailto:info@shipdirect.ca" className="text-brand-red underline">info@shipdirect.ca</a>.
              </Section>
              <Section title="7. Cookies">
                Our website may use cookies to enhance user experience and gather analytics data. You may disable cookies through your browser settings; however, some features of the website may not function properly if cookies are disabled.
              </Section>
              <Section title="8. Security">
                We implement reasonable administrative, technical, and physical safeguards to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure.
              </Section>
              <Section title="9. Third-Party Links">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites.
              </Section>
              <Section title="10. Updates to This Policy">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
              </Section>
              <Section title="11. Contact Us">
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
                <div className="mt-3 bg-navy-tint rounded-xl p-5 not-prose">
                  <p className="font-semibold text-brand-navy">ShipDirect</p>
                  <p>Ottawa Drop-off Location (Provided upon confirmation)</p>
                  <p><a href="mailto:info@shipdirect.ca" className="text-brand-red hover:underline">info@shipdirect.ca</a></p>
                  <p><a href="tel:6137002747" className="text-brand-red hover:underline">613-700-2747</a></p>
                </div>
              </Section>
            </>
          )}
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
