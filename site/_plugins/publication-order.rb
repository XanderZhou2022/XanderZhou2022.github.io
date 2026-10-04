require 'nokogiri'

module Jekyll
  module PublicationOrder
    # Stable partition inside each year, without moving entries between years.
    # Use the displayed venue, since accepted papers can also have arXiv links.
    def published_first(input)
      document = Nokogiri::HTML::DocumentFragment.parse(input)
      document.css('ol.bibliography').each do |list|
        entries = list.element_children.select { |node| node.name == 'li' }
        published, preprints = entries.partition do |entry|
          !entry.at_css('.publication-note')&.text.to_s.strip.match?(/\AarXiv\b/i)
        end
        (published + preprints).each { |entry| list.add_child(entry.unlink) }
      end
      document.to_html
    end
  end
end

Liquid::Template.register_filter(Jekyll::PublicationOrder)
